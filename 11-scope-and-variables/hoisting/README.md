# Hoisting

Code for the lecture *Hoisting* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-var-hoisting.js` - a `var` read before its line is `undefined`
- `examples/02-var-in-a-block-that-never-runs.js` - a `var` is hoisted even from an `if` that never runs
- `examples/03-let-const-tdz.js` - `let` and `const` are hoisted but throw in the temporal dead zone
- `examples/04-function-hoisting.js` - a function declaration can be called before its definition
- `examples/05-function-expression.js` - a function expression in a `var` is `undefined` before its line
- `examples/06-arrow-function.js` - an arrow function in a `const` is in the temporal dead zone
- `examples/07-hoisting-inside-functions.js` - a `var` inside a function shadows the outer one from the first line

Run one with `node 11-scope-and-variables/hoisting/examples/01-var-hoisting.js` from the repository folder.

## Tasks
1. **The receipt** (`tasks/01-the-receipt.js`) - fix an arrow function that is used before its declaration
2. **The price with tax** (`tasks/02-price-with-tax.js`) - fix a hoisted `var` that hides the outer tax rate

Run the tests with `npm test -- 11-scope-and-variables/hoisting`. They fail until the task is solved. Compare with `solutions/` after you try.
