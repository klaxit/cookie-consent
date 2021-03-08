"use strict"
export default class Cookie {
  constructor(cookieOptions) {
    this.cookieOptions = cookieOptions
    this.load()
  }

  dump() {
    const serialized = JSON.stringify({
      status: this.status,
      acceptedCategories: this.acceptedCategories
    })

    let cookieStr = this.cookieOptions.name + "=" + serialized

    const expDate = new Date()
    const expDays = this.cookieOptions.expiryDays
    const expHours = (typeof expDays !== "number"  ? 365 : expDays ) * 24
    expDate.setHours(expDate.getHours() + expHours)
    cookieStr += "; expires=" + expDate.toUTCString()

    cookieStr += "; path=/"
    cookieStr += (this.cookieOptions.domain ? "; domain=" + this.cookieOptions.domain : "")
    cookieStr += (this.cookieOptions.secure ? "; secure" : "")
    cookieStr += (this.cookieOptions.sameSite ? "; SameSite=" +  this.cookieOptions.sameSite : "")

    document.cookie = cookieStr
  }

  load() {
    const existingConsent = this._getCookie(this.cookieOptions.name)
    if(existingConsent){
      const parsed = JSON.parse(existingConsent)
      this.status = parsed.status
      this.acceptedCategories = parsed.acceptedCategories
    } else {
      this.status =  null
      this.acceptedCategories = []
    }
  }

  _getCookie(cookieName) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${cookieName}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
}