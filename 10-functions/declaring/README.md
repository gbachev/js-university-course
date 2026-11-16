# Declaring Functions

Code for the lecture *Declaring Functions* (section 10, Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-function-declaration.js` - a function declaration
- `examples/02-declaration-hoisting.js` - a declaration called before the line that defines it
- `examples/03-function-expression.js` - a function expression assigned to a `const`
- `examples/04-expression-before-assignment.js` - calling a function expression too early throws, with `const` and with `var`
- `examples/05-arrow-function.js` - an arrow function with a block body
- `examples/06-arrow-short-form.js` - an arrow function without parentheses, braces and `return`
- `examples/07-arrow-function-name.js` - an arrow function takes the name of its variable

Run one with `node 10-functions/declaring/examples/01-function-declaration.js` from the repository folder.

## Tasks
1. **Three ways to write a function** (`tasks/01-three-ways.js`) - write a declaration, a function expression and an arrow function
2. **Called too early** (`tasks/02-called-too-early.js`) - fix a function that calls a function expression before it exists
3. **Short arrow functions** (`tasks/03-short-arrows.js`) - write a discount and a shipping helper as one-line arrow functions

Run the tests with `npm test -- 10-functions/declaring`. They fail until the task is solved. Compare with `solutions/` after you try.
