# Enhanced Object Literals

Code for the lecture *Enhanced Object Literals* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-property-value-shorthand.js` - `{ name, age }` instead of `{ name: name, age: age }`
- `examples/02-shorthand-in-functions.js` - the shorthand in an object a function returns
- `examples/03-method-shorthand.js` - a method without the `function` keyword
- `examples/04-computed-property-names.js` - a key from an expression in square brackets
- `examples/05-combining-it-all.js` - all three in one object

Run one with `node 07-objects/enhanced-object-literals/examples/01-property-value-shorthand.js` from the repository folder.

## Tasks
1. **A new order** (`tasks/01-new-order.js`) - return an order with the property and method shorthands
2. **A stock entry** (`tasks/02-stock-entry.js`) - build the key of an object from the product id
3. **Fix the greeting** (`tasks/03-fix-the-greeting.js`) - replace an arrow function that breaks `this` with a method

Run the tests with `npm test -- 07-objects/enhanced-object-literals`. They fail until the task is solved. Compare with `solutions/` after you try.
