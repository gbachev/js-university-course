# var vs let vs const

Code for the lecture *var vs let vs const* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-var-ignores-blocks.js` - a `var` inside a block or an `if` is visible after it
- `examples/02-var-redeclaration.js` - declaring the same `var` twice does not throw
- `examples/03-let.js` - `let` stays inside its block and cannot be declared twice
- `examples/04-const.js` - a `const` cannot be reassigned, but its object can change
- `examples/05-temporal-dead-zone.js` - `let`, `const` and even `typeof` throw before the declaration
- `examples/06-scope-differences.js` - `var`, `let` and `const` inside an `if` in a function
- `examples/07-loops-with-timers.js` - `setTimeout` in a `var` loop and in a `let` loop
- `examples/08-const-in-for-of.js` - `const` in a `for...of` loop
- `examples/09-functions-in-loops.js` - functions created in a `var` loop and in a `let` loop

Run one with `node 11-scope-and-variables/var-let-const/examples/01-var-ignores-blocks.js` from the repository folder.

## Tasks
1. **Price tags** (`tasks/01-price-tags.js`) - fix functions created in a `var` loop that all see the same `i`
2. **Before initialization** (`tasks/02-before-initialization.js`) - fix a constant that is read in its temporal dead zone

Run the tests with `npm test -- 11-scope-and-variables/var-let-const`. They fail until the task is solved. Compare with `solutions/` after you try.
