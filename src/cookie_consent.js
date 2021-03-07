"use strict"

import defaultOptions from "./default_options"
import ConsentBox from "./consent_box"
import Cookie from "./cookie"
import Observable from "./observable"

export default class CookieConsent extends Observable {
  constructor( options = {} ){
    super()

    this.options = Object.assign(defaultOptions, options)
    this.consentBox = new ConsentBox(this.options)
    this.cookie = new Cookie(this.options.cookie)

    this.consentBox.on("accept-all", () => {
      this.consentBox.close()
      this.cookie.status = "accepted"
      this.cookie.acceptedCategories = Object.keys(this.options.categories)
      this.cookie.dump()
      this.emit("accept")
    })

    this.consentBox.on("accept-selected", () => {
      this.consentBox.close()
      this.cookie.status = "accepted"
      this.cookie.acceptedCategories = this.consentBox.selectedCategories()
      this.cookie.dump()
      this.emit("accept")
    })

    this.consentBox.on("reject", () => {
      this.consentBox.close()
      this.cookie.status = "rejected"
      this.cookie.acceptedCategories = []
      this.cookie.dump()
      this.emit("reject")
    })

    if(!this.cookie.status) {
      this.consentBox.open()
    }
  }
  open(){
    this.consentBox.open()
  }
  status(){
    this.cookie.status
  }
  acceptedCategories(){
    this.cookie.acceptedCategories
  }
}