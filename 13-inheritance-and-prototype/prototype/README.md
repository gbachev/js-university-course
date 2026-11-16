# Prototype

Code for the lecture *Prototype* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-prototype-link.js` - `Object.getPrototypeOf()` on an object and an array, up to `null`
- `examples/02-property-lookup.js` - a lookup that finds an own property, an inherited one and nothing
- `examples/03-object-prototype-methods.js` - `hasOwnProperty()`, `propertyIsEnumerable()` and `valueOf()` from `Object.prototype`
- `examples/04-set-prototype-of.js` - `Object.setPrototypeOf()` gives settings their defaults, and a loop throws
- `examples/05-shadowing.js` - an own property shadows the inherited one until we delete it
- `examples/06-legacy-proto.js` - the legacy `__proto__` accessor

Run one with `node 13-inheritance-and-prototype/prototype/examples/01-prototype-link.js` from the repository folder.

## Tasks
1. **Apply the defaults** (`tasks/01-apply-defaults.js`) - link a user's settings to the app defaults without copying anything
2. **Where does the setting come from?** (`tasks/02-setting-source.js`) - tell a custom setting from a default and a missing one
3. **Reset to the default** (`tasks/03-reset-setting.js`) - fix a reset that deletes the default instead of the user's value

Run the tests with `npm test -- 13-inheritance-and-prototype/prototype`. They fail until the task is solved. Compare with `solutions/` after you try.
