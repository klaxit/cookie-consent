# Cookie Consent

TODO

<img src="https://dfuzd1hyd2y0f.cloudfront.net/sharings/20210224_cookie-consent-demo-image_9f58fc0584e4cd25.jpg" alt="Cookie consent demo image" width="400"/>

## install

TODO

## Usage

```javascript
import CookieConsent from "CookieConsent"
// or
const CookieConsent = require( "CookieConsent" )
// or
const CookieConsent = window.CookieConsent

const cc = new CookieConsent({
  title: "We love cookies 🍪",
  // ... other options
})

cc.on( "accept", () => console.log("Accepted !") )
cc.on( "deny", () => console.log("Rejected !") )

console.log(cc.status)              // accepted, rejected
console.log(cc.acceptedCategories)  // ["essential", "analytics"]
console.log(cc.acceptedCategory("essential"))
```
### Options

Available configurationn options are documented in [default options](./src/default_options.js).

### Custom design

We won"t integrate custom layouts or themes BUT we will do our best to keep current HTML structure and CSS classes in place. And use semantic versioning to indicate any breaking change. So you can rely on these to build your own !

### Lifecycle hooks

```javascript
//TODO
```

## Contributing

We won"t integrate custom layouts ou themes BUT
we will do our best to respect semantic versioning so you can rely on class names and structure to build your own.

An we will then be happy to reference it [here][contributions] :)

## License
Please see LICENSE

[contributions](doc/contributions.md)
