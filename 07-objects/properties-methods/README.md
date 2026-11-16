# Object Properties and Methods

Code for the lecture *Object Properties and Methods* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-defining-properties.js` - key-value pairs and the property shorthand
- `examples/02-property-naming.js` - string keys with spaces or dashes, number keys and symbol keys
- `examples/03-dot-and-bracket-notation.js` - reading and changing a property with `.` and `[]`
- `examples/04-bracket-notation-with-variables.js` - bracket notation with the key in a variable
- `examples/05-invalid-identifiers.js` - why dot notation fails for keys like `'first-name'`
- `examples/06-missing-property.js` - a missing property gives `undefined`
- `examples/07-adding-properties.js` - adding a property by assigning to it
- `examples/08-deleting-properties.js` - removing a property with `delete`
- `examples/09-in-and-hasownproperty.js` - `in` and `hasOwnProperty()` with own and inherited properties
- `examples/10-symbol-keys.js` - symbol keys are skipped by `for...in`
- `examples/11-defining-methods.js` - methods written three ways, and one added later
- `examples/12-this-in-methods.js` - `this` lets a method use the other properties of its object
- `examples/13-for-in.js` - `for...in` with inherited properties, and `hasOwnProperty()` to skip them
- `examples/14-keys-values-entries.js` - `Object.keys()`, `Object.values()` and `Object.entries()`
- `examples/15-symbols-not-included.js` - symbol keys are left out of `Object.keys()`
- `examples/16-getters-and-setters.js` - a `fullName` getter and setter
- `examples/17-computed-property-names.js` - a property name from a variable
- `examples/18-method-chaining.js` - methods that return `this` so the calls can be chained

Run one with `node 07-objects/properties-methods/examples/01-defining-properties.js` from the repository folder.

## Tasks
1. **Update the profile** (`tasks/01-update-profile.js`) - set or remove a property whose name is in a variable
2. **Changed settings** (`tasks/02-changed-settings.js`) - fix a `for...in` loop that counts the inherited defaults too
3. **A shopping cart** (`tasks/03-shopping-cart.js`) - finish a cart with chainable methods and a getter

Run the tests with `npm test -- 07-objects/properties-methods`. They fail until the task is solved. Compare with `solutions/` after you try.
