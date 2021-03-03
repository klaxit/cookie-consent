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

    const _this = this

    this.consentBox.on("accept-all", function(){
      _this.consentBox.close()
      _this.cookie.status = "accepted"
      _this.cookie.acceptedCategories = Object.keys(_this.options.categories)
      _this.cookie.dump()
      _this.emit("accept")
    })

    this.consentBox.on("accept-selected", function(){
      _this.consentBox.close()
      _this.cookie.status = "accepted"
      _this.cookie.acceptedCategories = _this.consentBox.selectedCategories()
      _this.cookie.dump()
      _this.emit("accept")
    })

    this.consentBox.on("reject", function(){
      _this.consentBox.close()
      _this.cookie.status = "rejected"
      _this.cookie.acceptedCategories = []
      _this.cookie.dump()
      _this.emit("reject")
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