# Classes

Code for the lecture *Classes* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-constructor-function-reminder.js` - the `Person` constructor function from the previous lecture
- `examples/02-person-class.js` - the same `Person` as a class, and the prototype behind it
- `examples/03-getters-setters.js` - a price stored in cents, read and written in euros
- `examples/04-class-fields.js` - class fields give every cart its own items
- `examples/05-class-expressions.js` - a class assigned to a variable
- `examples/06-not-hoisted.js` - a class used before its declaration throws a `ReferenceError`
- `examples/07-strict-mode-and-new.js` - strict mode in a class body, and a class called without `new`

Run one with `node 13-inheritance-and-prototype/classes/examples/01-constructor-function-reminder.js` from the repository folder.

## Tasks
1. **From constructor function to class** (`tasks/01-constructor-to-class.js`) - rewrite a constructor function and its prototype methods as a class
2. **Video length in minutes** (`tasks/02-video-length.js`) - store a length in seconds and expose it in minutes with a getter and a setter
3. **A basket with fields** (`tasks/03-basket.js`) - a shop basket with class fields, a chainable method and two getters

Run the tests with `npm test -- 13-inheritance-and-prototype/classes`. They fail until the task is solved. Compare with `solutions/` after you try.
