# Cookie Consent

TODO

<img src="https://dfuzd1hyd2y0f.cloudfront.net/sharings/20210224_cookie-consent-demo-image_9f58fc0584e4cd25.jpg" alt="Cookie consent demo image" width="400"/>

## install

TODO

## Usage

```javascript
  // Classic
  const CookieConsent = window.CookieConsent
  // or (Module)
  import CookieConsent from "CookieConsent"
  // or (Module)
  const CookieConsent = require( "CookieConsent" )

  // Initialize the popup and open it
  const cc = new CookieConsent({
    title: "We love cookies 🍪",
    // ... other options
  })

  // Events
  cc.on( "accept", () => console.log("Accepted !") )
  cc.on( "reject", () => console.log("Rejected !") )

  // Main accessors
  console.log(cc.status)              // accepted, rejected
  console.log(cc.acceptedCategories)  // ["essential", "analytics"]

  // Re-open the popup to allow user to change its consent
  cc.open()
```
### Options

Available configurationn options are documented in [default options](./src/default_options.js).

### Custom design

We won't integrate custom themes BUT
we will do our best to keep current HTML structure and CSS classes in place. And use semantic versioning to indicate any breaking change. So you can rely on these to build your own !

### What about internationalization (i18n) ?

To keep things as simple as possible, and because there are many ways to handle i18n, we didn't provide built-in i18n capabilities. But you can easily support multiple languages by doing something like this :

```javascript
  const userLang = navigator.language || navigator.userLanguage
  const titles = {
    "fr-FR": "Nous utilisons des cookies",
    "default": "We use cookies"
  }
  const cc = new CookieConsent({
    title: titles[userLang] || titles["default"],
    // ...
  })
```

## License
Please see LICENSE

## TODO
- Browsers compatibility tests & matrix
- NPM packaging
- Complete README.md

