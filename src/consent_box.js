"use strict"

import consentBoxHtml from "./consent_box.html"
import Checkbox from "./checkbox"
import Observable from "./observable"

export default class ConsentBox extends Observable {
  constructor( options = {} ){
    super()

    this.options = options
    this.categories = this.options.categories

    this._build()

    document.body.appendChild(this.container)
  }

  open(){
    this.container.classList.add("displayed");
  }

  close(){
    this.container.classList.remove("displayed");
  }

  selectedCategories(){
    const categoriesElem = this._firstByClass("cc-categories")
    const selectedCategories = []

    for (var catKey in this.categories) {
      const catElem = categoriesElem.querySelector(
        "[data-category='" + catKey + "']"
      )
      if(catElem.getAttribute("aria-checked") == "true") {
        selectedCategories.push(catKey)
      }
    }

    return selectedCategories
  }

  _build(){
    // Build container & content
    var elemBuilder = document.createElement("div")
    elemBuilder.innerHTML = consentBoxHtml
    this.container = elemBuilder.firstChild

    this._firstByClass("cc-title").innerHTML = this.options.title;
    this._firstByClass("cc-description").innerHTML = this.options.description;
    this._firstByClass("cc-btn-accept-all").innerHTML = this.options.buttons.acceptAll;
    this._firstByClass("cc-btn-accept-selected").innerHTML = this.options.buttons.acceptSelected;
    this._firstByClass("cc-btn-show-settings").innerHTML = this.options.buttons.showSettings;
    this._firstByClass("cc-btn-hide-settings").innerHTML = this.options.buttons.hideSettings;

    const rejectBtns = this._allByClass("cc-btn-reject")
    for(let i=0; i < rejectBtns.length; i++){
      rejectBtns[i].innerHTML = this.options.buttons.reject;
    }

    this._buildCategories()
    this._setupButtons()
  }

  _buildCategories(){
    var categoriesElem = this._firstByClass("cc-categories")

    for (var catKey in this.categories) {
      var category = this.categories[catKey]

      var categoryElem = document.createElement("div")
      categoryElem.setAttribute("data-category", catKey)
      categoryElem.setAttribute("role", "checkbox")
      categoryElem.setAttribute("tabindex", "0")

      var categoryLbl = document.createElement("span")
      categoryLbl.setAttribute("data-category", catKey)
      categoryLbl.setAttribute("role", "link")
      categoryLbl.setAttribute("tabindex", "0")
      var lblNode = document.createTextNode(category.label)
      categoryLbl.appendChild(lblNode)

      categoryElem.appendChild(categoryLbl)

      categoriesElem.appendChild(categoryElem)

      categoryElem.addEventListener("click", this._categoryClicked.bind(this))

      if (category.checked) {
        categoryElem.setAttribute("aria-checked", "true")
        this._categoryClicked({target: categoryElem})
      }
      if (category.mandatory) {
        categoryElem.setAttribute("aria-disabled", "true")
      }
    }

    this._initCheckBoxes();
  }

  _initCheckBoxes() {
    var checkboxes = this.container.querySelectorAll("[role='checkbox']");
    for (var i = 0; i < checkboxes.length; i++) {
      new Checkbox(checkboxes[i]).init();
    }
  }

  _categoryClicked(event) {
    var targetElement = event.target || event.srcElement;
    var targetCatKey = targetElement.dataset.category

    var descElem = this._firstByClass("cc-category-description")
    descElem.innerHTML = this.categories[targetCatKey].description
  }

  _setupButtons() {
    // Settings buttons
    this.container.querySelectorAll(".cc-btn-settings")
                  .forEach((elem) => {
      elem.addEventListener("click", this._toggleSettings.bind(this))
    })

    // Accept buttons
    this.container.querySelectorAll(".cc-btn-accept-all")
        .forEach((elem) => {
      elem.addEventListener("click", () => this.emit("accept-all"))
    })
    this.container.querySelectorAll(".cc-btn-accept-selected")
                  .forEach((elem) => {
      elem.addEventListener("click", () => this.emit("accept-selected"))
    })

    // Reject buttons
    this.container.querySelectorAll(".cc-btn-reject")
                  .forEach((elem) => {
      elem.addEventListener("click", () => this.emit("reject"))
    })
  }

  _toggleSettings() {
    var landingClassList = this._firstByClass("cc-section-landing").classList;
    var settingsClassList = this._firstByClass("cc-section-settings").classList;

    if(landingClassList.contains("cc-hidden")) {
      landingClassList.remove("cc-hidden")
      settingsClassList.add("cc-hidden")
    } else {
      landingClassList.add("cc-hidden")
      settingsClassList.remove("cc-hidden")
    }
  }


  _firstByClass(className){
    return this._allByClass(className)[0]
  }

  _allByClass(className){
    var elems = this.container.getElementsByClassName(className)
    if (elems.length > 0) { return elems }

    throw "Cannot find elements for class " + className + ".";
  }
}