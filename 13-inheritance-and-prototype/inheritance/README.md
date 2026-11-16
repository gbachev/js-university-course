# Inheritance

Code for the lecture *Inheritance* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-chain-by-hand.js` - a person, an employee and John Doe linked with `__proto__` keys
- `examples/02-delegation-is-live.js` - a method added to the prototype later reaches every object below it
- `examples/03-own-vs-inherited.js` - `in`, `Object.hasOwn()`, `for...in`, `Object.keys()`, JSON and spread on a chain
- `examples/04-proto-in-literals.js` - the `__proto__` key in a literal, a computed key and a value that is ignored
- `examples/05-proto-assignment.js` - assigning a number to `'__proto__'` vanishes without an error
- `examples/06-instanceof-vs-isprototypeof.js` - `isPrototypeOf()` with plain objects, and `instanceof` throwing
- `examples/07-array-prototype-checks.js` - `Array.prototype` is in the chain of an array, `Array` is not

Run one with `node 13-inheritance-and-prototype/inheritance/examples/01-chain-by-hand.js` from the repository folder.

## Tasks
1. **Build the chain** (`tasks/01-build-the-chain.js`) - link a product, a book and an ebook so the ebook reaches every method
2. **Own and inherited** (`tasks/02-own-and-inherited.js`) - list which keys an object owns and which it inherits
3. **Is it in the family?** (`tasks/03-in-the-family.js`) - fix a role check that uses `instanceof` with plain objects

Run the tests with `npm test -- 13-inheritance-and-prototype/inheritance`. They fail until the task is solved. Compare with `solutions/` after you try.
