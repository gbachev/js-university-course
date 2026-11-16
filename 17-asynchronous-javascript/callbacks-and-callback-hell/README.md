# Callbacks and Callback Hell

Code for the lecture *Callbacks and Callback Hell* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-sync-and-async-callbacks.js` - `forEach()` calls its callback now, `setTimeout()` later
- `examples/02-read-file-error-first.js` - Node's `readFile()` with an error-first callback
- `examples/03-our-own-error-first.js` - our own `getStock()` in the error-first style
- `examples/04-pyramid-of-doom.js` - a five-step checkout with nested callbacks
- `examples/05-inversion-of-control.js` - a payment library that calls our callback twice
- `examples/06-named-functions.js` - the same checkout flattened with named functions

Run one with `node 17-asynchronous-javascript/callbacks-and-callback-hell/examples/01-sync-and-async-callbacks.js` from the repository folder.

## Tasks
1. **Price lookup** (`tasks/01-price-lookup.js`) - write an async price lookup in the error-first style
2. **Checkout with callbacks** (`tasks/02-checkout-with-callbacks.js`) - run three dependent steps and stop at the first error
3. **Call it once** (`tasks/03-call-it-once.js`) - protect a callback from a library that calls it twice

Run the tests with `npm test -- 17-asynchronous-javascript/callbacks-and-callback-hell`. They fail until the task is solved. Compare with `solutions/` after you try.
