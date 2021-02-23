/*
* This document includes material copied from or derived from
* https://www.w3.org/TR/wai-aria-practices/examples/checkbox/checkbox-1/js/checkbox.js
* Copyright © 2015 W3C® (MIT, ERCIM, Keio, Beihang).
*
*/

export default class Checkbox {

  constructor(domNode) {
    this.domNode = domNode;

    this.keyCode = Object.freeze({
      "RETURN": 13,
      "SPACE": 32
    });
  }

  init() {
    this.domNode.tabIndex = 0;

    if (!this.domNode.getAttribute("aria-checked")) {
      this.domNode.setAttribute("aria-checked", "false");
    }

    this.domNode.addEventListener("keydown", this.handleKeydown.bind(this));
    this.domNode.addEventListener("click", this.handleClick.bind(this));
    this.domNode.addEventListener("focus", this.handleFocus.bind(this));
    this.domNode.addEventListener("blur", this.handleBlur.bind(this));

  }

  toggleCheckbox() {
    if (this.domNode.getAttribute("aria-disabled") === "true") {
      return;
    }

    if (this.domNode.getAttribute("aria-checked") === "true") {
      this.domNode.setAttribute("aria-checked", "false");
    }
    else {
      this.domNode.setAttribute("aria-checked", "true");
    }
  }

  /* EVENT HANDLERS */

  handleKeydown(event) {
    var flag = false;

    switch (event.keyCode) {
      case this.keyCode.SPACE:
        this.toggleCheckbox();
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  handleClick() {
    this.toggleCheckbox();
  }

  handleFocus() {
    this.domNode.classList.add("focus");
  }

  handleBlur() {
    this.domNode.classList.remove("focus");
  }
}






