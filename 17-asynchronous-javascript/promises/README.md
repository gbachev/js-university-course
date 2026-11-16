# Promises

Code for the lecture *Promises* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-delay.js` - `delay()` wraps `setTimeout()` in a promise
- `examples/02-resolve-and-reject.js` - an order lookup that fulfills or rejects
- `examples/03-then-catch-finally.js` - `then()`, `catch()` and `finally()` around a user lookup
- `examples/04-chaining.js` - what a handler returns decides what the next one gets
- `examples/05-flat-checkout.js` - the checkout pyramid as a flat chain with one `catch()`
- `examples/06-throw-and-resolve-reject.js` - `Promise.resolve()`, `Promise.reject()` and a throw inside `then()`
- `examples/07-promisify.js` - wrapping an error-first callback function in a promise
- `examples/08-missing-return.js` - a forgotten `return` inside `then()`

Run one with `node 17-asynchronous-javascript/promises/examples/01-delay.js` from the repository folder.

## Tasks
1. **Promisify the shipping quote** (`tasks/01-promisify-shipping.js`) - wrap an error-first callback function in a promise
2. **The missing return** (`tasks/02-the-missing-return.js`) - fix a chain that does not wait for its VAT step
3. **Pay the cart** (`tasks/03-pay-the-cart.js`) - a flat chain that throws for small orders and lets errors travel down

Run the tests with `npm test -- 17-asynchronous-javascript/promises`. They fail until the task is solved. Compare with `solutions/` after you try.
