"use strict"

import "./styles/main.scss"

import CookieConsent from "./cookie_consent"

if (typeof exports !== "undefined") {
  module.exports = CookieConsent
} else {
  window.CookieConsent = CookieConsent
}


