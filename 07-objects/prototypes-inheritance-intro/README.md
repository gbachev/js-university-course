# Brief Intro to Prototypes and Inheritance

Code for the lecture *Brief Intro to Prototypes and Inheritance* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-inherited-method.js` - `toString()` comes from `Object.prototype`
- `examples/02-prototype-chain.js` - `Object.getPrototypeOf()`, `Object.create()` and the `null` at the end of the chain
- `examples/03-constructor-prototype.js` - a method on `Person.prototype` shared by every person
- `examples/04-class-prototype.js` - a class method lives on the prototype too

Run one with `node 07-objects/prototypes-inheritance-intro/examples/01-inherited-method.js` from the repository folder.

## Tasks
1. **Find the owner** (`tasks/01-find-the-owner.js`) - walk up the prototype chain to the object that holds a property
2. **One method for all products** (`tasks/02-one-method-for-all.js`) - move a method from the constructor to the prototype

Run the tests with `npm test -- 07-objects/prototypes-inheritance-intro`. They fail until the task is solved. Compare with `solutions/` after you try.
