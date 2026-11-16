# Calling Functions and Return Values

Code for the lecture *Calling Functions and Return Values* (section 10, Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-basic-call.js` - calling a function with an argument
- `examples/02-call-many-times.js` - the same function called with different arguments
- `examples/03-calling-function-expressions.js` - calling a function expression and an arrow function through their variables
- `examples/04-return-value.js` - `return` gives a result we can keep in a variable
- `examples/05-no-return.js` - a function without `return` returns `undefined`
- `examples/06-return-a-function.js` - a function that returns another function
- `examples/07-void-operator.js` - the `void` operator gives `undefined`
- `examples/08-function-inside-another.js` - a function that calls another function
- `examples/09-function-as-argument.js` - a function passed as an argument and called inside
- `examples/10-no-parameters.js` - calling a function with empty parentheses
- `examples/11-conditional-call.js` - calling a function only when a condition is true

Run one with `node 10-functions/calling-return/examples/01-basic-call.js` from the repository folder.

## Tasks
1. **Return, do not log** (`tasks/01-return-not-log.js`) - fix a function that prints its result instead of returning it
2. **Build on small functions** (`tasks/02-order-total.js`) - add up an order by calling two smaller functions
3. **A function that makes functions** (`tasks/03-price-formatter.js`) - return a price formatter for a currency

Run the tests with `npm test -- 10-functions/calling-return`. They fail until the task is solved. Compare with `solutions/` after you try.
