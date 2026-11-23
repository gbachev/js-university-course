# Arrow Functions

Code for the lecture *Arrow Functions* (section 10, Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-basic-syntax.js` - the same function as a function expression and as an arrow function
- `examples/02-one-parameter.js` - one parameter without parentheses
- `examples/03-block-body.js` - a block body with braces and `return`
- `examples/04-this-in-a-regular-callback.js` - a regular callback in `setTimeout` loses `this`
- `examples/05-self-variable.js` - the old fix: keep `this` in a variable
- `examples/06-arrow-callback.js` - an arrow callback keeps the `this` of the method
- `examples/07-arrow-in-a-class.js` - an arrow callback in `setInterval` inside a class
- `examples/08-no-arguments-object.js` - an arrow function has no `arguments` of its own
- `examples/09-rest-instead.js` - rest parameters in an arrow function
- `examples/10-not-a-constructor.js` - an arrow function cannot be called with `new`
- `examples/11-not-for-methods.js` - an arrow function as a method does not get the object as `this`

Run one with `node 10-functions/arrow/examples/01-basic-syntax.js` from the repository folder.

## Tasks
1. **In stock** (`tasks/01-in-stock-names.js`) - list the names of the products in stock with short arrow callbacks
2. **Lost this** (`tasks/02-lost-this.js`) - fix a `map()` callback that loses the `this` of its method
3. **Average rating** (`tasks/03-average-rating.js`) - fix an arrow function that reads `arguments` by using a rest parameter
4. **The price list** (`tasks/04-price-list.js`, page `tasks/04-price-list.html`) - show prices on the page with short arrow callbacks, a first look at the page (browser)

Run the tests of tasks 1-3 with `npm test -- 10-functions/arrow`. Task 4 runs in the browser: run `npm run serve`, open the task page and read the checks at the bottom of it. The DOM itself comes in section 18; the task file shows the few tools it needs. The tests and checks fail until the task is solved. Compare with `solutions/` after you try, or add `?solutions` to the address of the task page to run its checks against the solution.
