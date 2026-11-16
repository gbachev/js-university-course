# The super Keyword

Code for the lecture *The super Keyword* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-extends.js` - an empty `Employee extends Person` still works
- `examples/02-super-in-constructor.js` - `super(name, email)` runs the parent's constructor
- `examples/03-super-before-this.js` - touching `this` before `super()` throws a `ReferenceError`
- `examples/04-super-method.js` - an override that calls `super.greet()`
- `examples/05-static-chain.js` - a static method inherited through the chain of the classes
- `examples/06-extending-array.js` - a `BookList` that extends `Array`
- `examples/07-extending-error.js` - a `ValidationError` that extends `Error`

Run one with `node 13-inheritance-and-prototype/the-super-keyword/examples/01-extends.js` from the repository folder.

## Tasks
1. **Fix the missing super()** (`tasks/01-missing-super.js`) - fix a `DigitalProduct` constructor that throws before it starts
2. **A longer description** (`tasks/02-extend-describe.js`) - override `describe()` and build on the parent's version with `super`
3. **An out-of-stock error** (`tasks/03-out-of-stock-error.js`) - an error class of our own that extends `Error`

Run the tests with `npm test -- 13-inheritance-and-prototype/the-super-keyword`. They fail until the task is solved. Compare with `solutions/` after you try.
