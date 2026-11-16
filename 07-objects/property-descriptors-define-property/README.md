# Property Descriptors and Object.defineProperty

Code for the lecture *Property Descriptors and Object.defineProperty* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-default-attributes.js` - the default attributes of a property we assign
- `examples/02-define-property.js` - a property with exact attributes from `Object.defineProperty()`
- `examples/03-writable.js` - a read-only property, and the error in strict mode
- `examples/04-enumerable.js` - a property hidden from `Object.keys()` and JSON
- `examples/05-configurable.js` - a property that cannot be deleted or redefined
- `examples/06-accessors.js` - a `fullName` accessor with `get` and `set`
- `examples/07-accessor-and-data-conflict.js` - `value` and `get` on one property throw
- `examples/08-define-properties.js` - several properties with `Object.defineProperties()`
- `examples/09-cloning-descriptors.js` - a copy that keeps the descriptors

Run one with `node 07-objects/property-descriptors-define-property/examples/01-default-attributes.js` from the repository folder.

## Tasks
1. **A read-only id** (`tasks/01-read-only-id.js`) - add an id that cannot be changed or deleted
2. **Hide the password hash** (`tasks/02-hidden-password.js`) - fix a property that leaks into JSON and `Object.keys()`
3. **The full name** (`tasks/03-full-name.js`) - add a `fullName` accessor with a getter and a setter

Run the tests with `npm test -- 07-objects/property-descriptors-define-property`. They fail until the task is solved. Compare with `solutions/` after you try.
