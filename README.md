[![MIT License][mit-badge]](LICENSE)

# Cookie Consent

A lightweight JavaScript plugin to handle cookie consent.

It is designed to help you comply with data privacy laws like [EU Cookie Law][eu-cookie-law], [European GDPR][gdpr] or [California CCPA][ccpa].

<img src="https://dfuzd1hyd2y0f.cloudfront.net/sharings/20210309_cookie-consent-screen_256ec5e97eaa3142.jpg" alt="Cookie consent demo image" width="400"/>

## Usage

```javascript
  // Module
  import CookieConsent from "@klaxit/cookie-consent"
  // or (Classic)
  const CookieConsent = window.CookieConsent

  // Initialize the popup and open it
  const cc = new CookieConsent({
    title: "We use cookies 🍪",
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

Available configuration options are documented in [default options](./src/default_options.js).

### Custom design

We won't integrate custom themes BUT

we will do our best to keep current HTML structure and CSS classes in place. And use semantic versioning to indicate any breaking change. So you can rely on these to build your own !

### Internationalization (i18n) ?

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

## Compatibility

We do our best to support these configurations.

### Browsers

| DEVICE  | BROWSER          | VERSIONS |
| ------- | ---------------- | -------- |
| DESKTOP | Chrome           | N / N-1  |
| DESKTOP | Safari           | N / N-1  |
| DESKTOP | Firefox          | N / N-1  |
| DESKTOP | MS Edge          | N / N-1  |
| DESKTOP | Samsung internet | N / N-1  |
| DESKTOP | Opera            | N / N-1  |
| DESKTOP | IE               | 11       |

### Definitions

Minimum supported definition is **320 x 568**.

## License
Please see [LICENSE](LICENSE)

[mit-badge]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[eu-cookie-law]: https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:337:0011:0036:En:PDF
[gdpr]: https://gdpr.eu/
[ccpa]: https://oag.ca.gov/privacy/ccpa

