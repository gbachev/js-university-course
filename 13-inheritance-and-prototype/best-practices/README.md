# Best Practices

Code for the lecture *Best Practices* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-prefer-class-syntax.js` - a class and a child class, with `super()` as the first line
- `examples/02-data-on-the-instance.js` - a class field gives every cart its own items, the methods stay shared
- `examples/03-leave-built-ins-alone.js` - a method added to `Array.prototype` leaks into `for...in`, and a plain function instead
- `examples/04-dictionaries.js` - a `Map` and `Object.create(null)` for keys from user data

Run one with `node 13-inheritance-and-prototype/best-practices/examples/01-prefer-class-syntax.js` from the repository folder.
