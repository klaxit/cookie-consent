"use strict"

import EventEmitter from "events"

import defaultOptions from "./default_options"
import ConsentBox from "./consent_box"
import Cookie from "./cookie"
import Observable from "./observable"

// There is only one event source which is shared between
// instance and class. Emit is only accesible at the instance
// level however.
const SharedEmitter = new EventEmitter()

export default class CookieConsent extends Observable {
  constructor( options = {} ){
    // Since there must only be one instance (one consent box),
    // we will indicate user that it is not OK to create many
    // instances. Because of the option Object that may vary,
    // we cannot just return original instance, users would be
    // confused.
    if (CookieConsent._instance) {
      console.warn("CookieConsent already created, returning the original instance.")
      return CookieConsent._instance
    }
    super(CookieConsent._emitter)
    CookieConsent._instance = this


    this.options = Object.assign(defaultOptions, options)
    this._consentBox = new ConsentBox(this.options)
    this._cookie = new Cookie(this.options.cookie)

    this._consentBox.on("accept-all", () => {
      this._consentBox.close()
      this._cookie.status = "accepted"
      this._cookie.acceptedCategories = Object.keys(this.options.categories)
      this._cookie.dump()
      this.emit("accept")
      this.emit("change")
    })

    this._consentBox.on("accept-selected", () => {
      this._consentBox.close()
      this._cookie.status = "accepted"
      this._cookie.acceptedCategories = this.consentBox.selectedCategories()
      this._cookie.dump()
      this.emit("accept")
      this.emit("change")
    })

    this._consentBox.on("reject", () => {
      this._consentBox.close()
      this._cookie.status = "rejected"
      this._cookie.acceptedCategories = []
      this._cookie.dump()
      this.emit("reject")
      this.emit("change")
    })

    if (!this._cookie.status) {
      this._consentBox.open()
    }
  }

  open () {
    this._consentBox.open()
  }

  emit (event) {
    super.emit(event, this)
  }

  get status () {
    return this._cookie.status
  }

  get acceptedCategories () {
    return this._cookie.acceptedCategories
  }
}

// Static level properties, since class level static properties are still a
// proposal, we use Object.defineProperties.
Object.defineProperties(CookieConsent, {
  open: {
    value() {
      if (!this._instance) throw new Error("You must initialize a CookieConsent instance before opening.")

      this._instance.open()
    }
  },
  status: {
    get() { return this._instance?.status || Cookie.DEFAULT_STATUS }
  },
  acceptedCategories: {
    get() { return this._instance?.acceptedCategories || Cookie.DEFAULT_ACCEPTED_CATEGORIES }
  },
  on: {
    value: SharedEmitter.on.bind(SharedEmitter)
  }
})
