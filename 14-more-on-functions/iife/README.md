# IIFE (Immediately Invoked Function Expressions)

Code for the lecture *IIFE (Immediately Invoked Function Expressions)* (section 14, More on Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-basic-syntax.js` - a function expression in parentheses, called at once
- `examples/02-other-operators.js` - `!`, `~`, `-`, `+`, `void` and others also make an expression
- `examples/03-parameters.js` - passing arguments to an IIFE
- `examples/04-passing-globals.html` - passing `window` and `document` in as local names (browser)
- `examples/05-returning-values.js` - an IIFE that returns a counter with private state
- `examples/06-named-iife.js` - the name of an IIFE is not visible outside it
- `examples/07-arrow-iife.js` - an arrow function invoked at once
- `examples/08-namespace-wrapper.html` - adding only what we want to a namespace object (browser)
- `examples/09-one-time-setup.html` - setup code that leaves no variables behind (browser)
- `examples/10-async-iife.html` - an async IIFE to use `await` in a classic script (browser, fetches `data.json`)
- `examples/11-jquery-style.html` - a library wrapped in an IIFE that exposes only `$` (browser)
- `examples/12-defensive-semicolon.js` - why a semicolon goes in front of an IIFE

Run one with `node 14-more-on-functions/iife/examples/01-basic-syntax.js` from the repository folder. For the browser examples, run `npm run serve` and open `14-more-on-functions/iife/examples/04-passing-globals.html` (or another page) from the address it prints.

## Tasks
1. **The shop settings** (`tasks/01-shop-settings.js`) - fix an IIFE that a missing semicolon turns into a call
2. **Order numbers** (`tasks/02-order-numbers.js`) - an IIFE that returns an order counter with a private count
3. **The shop namespace** (`tasks/03-shop-namespace.js`) - add a function to a namespace object and keep its rate private

Run the tests with `npm test -- 14-more-on-functions/iife`. They fail until the task is solved. Compare with `solutions/` after you try.
