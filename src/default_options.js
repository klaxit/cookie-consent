"use strict"

export default {
  title: "We use cookies",

  description: `Click “Accept” to enable us to use cookies to personalize
                this site. Customize your preferences in your
                Cookie Settings or click “Reject” if you do not want us
                to use cookies for this purpose. Learn more in our
                <a href="/cookies">Cookie Notice</a>.`,

  categories: {
    essentials: {
			label: "Essential",
      description: `Essential cookies are necessary for features which
                    are essential to your use of our site or services,
                    such as account login, authentication, and site security.`,
      enabled: true,
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
    name: "cookieconsent_status",
    domain: "",
    expiryDays: 365,
    secure: false
  }
}