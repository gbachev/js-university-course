# Context vs Scope

Code for the lecture *Context vs Scope* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-scope.js` - a function sees the variables around it, not the ones inside other functions
- `examples/02-context.js` - the same method gets `this` from the call: the object before the dot, or `undefined` in a plain call

Run one with `node 11-scope-and-variables/context-vs-scope/examples/01-scope.js` from the repository folder.

## Tasks
1. **The price with VAT** (`tasks/01-price-with-vat.js`) - write a shared method that takes the VAT rate from its scope and the price from `this`
2. **Scope or context?** (`tasks/02-scope-or-context.js`) - fix a method that reads each of its two values from the wrong place
3. **The lost greeting** (`tasks/03-lost-greeting.js`) - return a greeter that keeps its user when it is called on its own

Run the tests with `npm test -- 11-scope-and-variables/context-vs-scope`. They fail until the task is solved. Compare with `solutions/` after you try.
