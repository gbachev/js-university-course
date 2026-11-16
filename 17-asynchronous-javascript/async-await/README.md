# Async/Await

Code for the lecture *Async/Await* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-async-returns-a-promise.js` - an async function always returns a promise
- `examples/02-await-pauses-this-function.js` - `await` pauses only its own function
- `examples/03-checkout-with-await.js` - the checkout with one `await` per step and one `try...catch`
- `examples/04-try-catch-finally.js` - a rejected `await` lands in `catch`, and `finally` hides the spinner
- `examples/05-sequential-vs-parallel.js` - awaiting in a loop against `Promise.all()`, timed
- `examples/06-the-foreach-trap.js` - an async callback in `forEach()` gives a total of 0
- `examples/07-top-level-await.js` - `await` at the top level of a module

Run one with `node 17-asynchronous-javascript/async-await/examples/01-async-returns-a-promise.js` from the repository folder.

## Tasks
1. **The order summary** (`tasks/01-order-summary.js`) - await two dependent lookups and fall back to a text on any error
2. **Out of the forEach trap** (`tasks/02-the-foreach-trap.js`) - fix a total that is always 0, keeping the requests parallel
3. **Retry with backoff** (`tasks/03-retry-with-backoff.js`) - retry a failing call, waiting twice as long each time

Run the tests with `npm test -- 17-asynchronous-javascript/async-await`. They fail until the task is solved. Compare with `solutions/` after you try.
