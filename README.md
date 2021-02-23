# Cookie Consent

TODO
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
### Configuration options

Available configurationn options are documented in [src/default_options.js].

### Customizing the design

We won"t integrate custom layouts or themes BUT we will do our best to keep current HTML structure and CSS classes in place. And use semantic versioning to indicate any breaking change. So you can rely on these to build your own !

## Lifecycle hooks

```
// TODO

```

### Options
Please see [src/default_options.js]

### Lifecycle hooks

TODO

## Contributing

We won"t integrate custom layouts ou themes BUT
we will do our best to respect semantic versioning so you can rely on class names and structure to build your own.

An we will then be happy to reference it [here][contributions] :)

## License
Please see LICENSE

[contributions](doc/contributions.md)
