# Best Practices

Code for the lecture *Best Practices* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-const-for-objects.js` - `const` fixes the reference, the properties can still change
- `examples/02-initialize-all-properties.js` - all the properties defined when the object is created
- `examples/03-prefer-dot-notation.js` - dot notation for known names, brackets for dynamic ones
- `examples/04-shared-references.js` - a shared reference, and a real copy when we need one
- `examples/05-freeze-critical-config.js` - a frozen config that cannot be changed by accident
- `examples/06-methods-that-use-this.js` - a regular method instead of an arrow function when it needs `this`

Run one with `node 07-objects/best-practices/examples/01-const-for-objects.js` from the repository folder.
