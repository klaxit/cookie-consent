"use strict"

export default {
  // Title of the
  title: "We use cookies",

  description: `Click “Accept” to enable us to use cookies to personalize
                this site. Customize your preferences in your
                Cookie Settings or click “Reject” if you do not want us
                to use cookies for this purpose. Learn more in our
                <a href="/cookies">Cookie Notice</a>.`,

  buttons: {
    acceptAll: "Accept",
    acceptSelected: "Accept Cookies",
    reject: "Reject",
    showSettings: "Cookies settings",
    hideSettings: "Hide",
  },

  categories: {
    essentials: {
			label: "Essential",
      description: `Essential cookies are necessary for features which
                    are essential to your use of our site or services,
                    such as account login, authentication, and site security.`,
      checked: true,
      mandatory: true
		},
		analytics: {
			label: "Analytics",
      description: `Analytics cookies allow us to analyze your visits and
                    actions on our websites, and offer you a more relevant
                    experience.`
		}
  },

  cookie: {
    // Name of the cookie storing the consent state
    name: "cookie_consent",

    // If null, will take `location.hostname` by default
    domain: null,

    // Duration of the consent
    expiryDays: 365,

    // If true, the cookies will only be allowed over https
    secure: false,

    // See https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    sameSite: "Lax",
  }
}