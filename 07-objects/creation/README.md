# Creating Objects

Code for the lecture *Creating Objects* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-object-literal.js` - an object written with curly braces
- `examples/02-object-constructor.js` - `new Object()` and the properties added after it
- `examples/03-object-create.js` - `Object.create()` with a prototype the new object inherits from
- `examples/04-constructor-function.js` - a constructor function called with `new`

Run one with `node 07-objects/creation/examples/01-object-literal.js` from the repository folder.

## Tasks
1. **A new book** (`tasks/01-new-book.js`) - return a book as an object literal
2. **The Product constructor** (`tasks/02-product-constructor.js`) - finish a constructor function for our shop's products
3. **Accounts with defaults** (`tasks/03-account-defaults.js`) - create accounts with `Object.create()` so they inherit the defaults

Run the tests with `npm test -- 07-objects/creation`. They fail until the task is solved. Compare with `solutions/` after you try.
