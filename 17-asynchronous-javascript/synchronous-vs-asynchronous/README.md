# Synchronous vs Asynchronous Code

Code for the lecture *Synchronous vs Asynchronous Code* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-blocking-wait.js` - a busy loop blocks the thread for three seconds
- `examples/02-set-timeout.js` - `setTimeout()` returns at once, and its callback runs later
- `examples/03-reading-vs-execution-order.js` - even a 0 ms timer runs after the code below it
- `examples/04-return-too-early.js` - returning a value set in a timer gives `undefined`
- `examples/05-callback.js` - passing a callback that gets the user when it is ready

Run one with `node 17-asynchronous-javascript/synchronous-vs-asynchronous/examples/01-blocking-wait.js` from the repository folder.

## Tasks
1. **Pass a callback** (`tasks/01-pass-a-callback.js`) - fix a function that returns an async result too early
2. **Greet the user** (`tasks/02-greet-the-user.js`) - build a greeting on top of an async function with a callback

Run the tests with `npm test -- 17-asynchronous-javascript/synchronous-vs-asynchronous`. They fail until the task is solved. Compare with `solutions/` after you try.
