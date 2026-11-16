# Variables and Functions: A First Look

Code for the lecture *Variables and Functions: A First Look* (section 3, JavaScript Foundations) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-a-variable.js` - a `let` variable that gets a new value twice
- `examples/02-let-and-const.js` - `let` changes, and assigning to a `const` is a `TypeError`
- `examples/03-function-declaration.js` - `greet(name)` declared once and called twice
- `examples/04-several-arguments.js` - two arguments fill two parameters in order
- `examples/05-without-return.js` - a function that prints but returns `undefined`
- `examples/06-arrow-functions.js` - an arrow function with one expression, and one with curly braces and `return`

Run one with `node 03-javascript-foundations/variables-and-functions/examples/01-a-variable.js` from the repository folder.

## Tasks
1. **Return, don't print** (`tasks/01-return-not-print.js`) - fix a line total function that prints its result instead of returning it
2. **A constant that changes** (`tasks/02-constant-total.js`) - fix a checkout total that throws because it reassigns a `const`
3. **The order message** (`tasks/03-order-message.js`) - write an arrow function that returns a thank-you message with the name and the order total

Run the tests with `npm test -- 03-javascript-foundations/variables-and-functions`. They fail until the task is solved. Compare with `solutions/` after you try.
