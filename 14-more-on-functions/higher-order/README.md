# Higher-Order Functions

Code for the lecture *Higher-Order Functions* (section 14, More on Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-functions-as-arguments.js` - `greet()` takes a formatter function
- `examples/02-built-in-higher-order-functions.js` - `map()`, `filter()` and `reduce()`
- `examples/03-returning-functions.js` - the `priceAbove()` factory builds tests for `filter()`
- `examples/04-once.js` - `once()` lets a function run only the first time
- `examples/05-passing-the-factory.js` - passing the factory instead of its result lets everything through

Run one with `node 14-more-on-functions/higher-order/examples/01-functions-as-arguments.js` from the repository folder.

## Tasks
1. **The discount factory** (`tasks/01-discount-factory.js`) - a factory that returns a price function for each discount
2. **The call log** (`tasks/02-log-calls.js`) - a wrapper that logs the name and arguments of every call
3. **A coupon with a limit** (`tasks/03-limit-uses.js`) - a wrapper that lets a function run a set number of times

Run the tests with `npm test -- 14-more-on-functions/higher-order`. They fail until the task is solved. Compare with `solutions/` after you try.
