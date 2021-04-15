[![MIT License][mit-badge]](LICENSE)

# Cookie Consent

A lightweight JavaScript plugin to handle cookie consent.

It is designed to help you comply with data privacy laws like [EU Cookie Law][eu-cookie-law], [European GDPR][gdpr] or [California CCPA][ccpa].

<img src="examples/demo.gif" alt="Cookie consent demo image" width="540"/>

## Installation

```bash
npm install @klaxit/cookie-consent
```

or

```bash
yarn add @klaxit/cookie-consent
```

or

```html
<script src="https://cdn.jsdelivr.net/npm/@klaxit/cookie-consent@X.Y.Z/dist/cookie-consent.js"></script>
```

<sub>**NOTE:** the latter isn't advised if you want to have one build for all your libraries. Mostly great for tests</sub>

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
  cc.on("accept", (cc /* your CookieConsent instance */) => console.log("Accepted !"))
  cc.on("reject", (cc) => console.log("Rejected !"))
  cc.on("change", (cc) => console.log("Any change !"))
  // All events can also be binded to `CookieConsent`.


  // Main accessors
  console.log(cc.status)              // accepted, rejected
  console.log(cc.acceptedCategories)  // ["essential", "analytics"]
  // also available under `CookieConsent`

  // Re-open the popup to allow user to change its consent
  cc.open()
  // also available under `CookieConsent` once initialized
```
### Options

Available configuration options are documented in [default options](./src/default_options.js).

### Integration with trackers

You can see an example integration with Google Analytics in [examples/index.ejs](./examples/index.ejs).
If you want to try further, `git clone git@github.com:klaxit/cookie-consent && yarn && yarn start` will
run this example.

By using the interface described [above](#usage), you should be able to load scripts on demand depending
on the three given events.

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
