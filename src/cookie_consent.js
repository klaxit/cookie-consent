"use strict"

import defaultOptions from "./default_options"
import ConsentBox from "./consent_box"

export default class CookieConsent {
  constructor( options = {} ){
    this.options = Object.assign(defaultOptions, options)
    this.consentBox = new ConsentBox(this.options)

    window.addEventListener("load", this.open.bind(this))
  }
  open(){
    this.consentBox.open()
  }
  close(){
    this.consentBox.close();
  }
}