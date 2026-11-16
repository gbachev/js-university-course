# Timers: setTimeout and setInterval

Code for the lecture *Timers: setTimeout and setInterval* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-set-timeout.js` - a toast that hides itself, with an argument passed to the callback
- `examples/02-clear-timeout.js` - an undo window with `clearTimeout()`
- `examples/03-delay-is-a-minimum.js` - a 100 ms timer waits for a busy loop
- `examples/04-set-interval.js` - a countdown with `setInterval()` and `clearInterval()`
- `examples/05-interval-overlap.js` - polling with `setInterval()`, where the requests overlap
- `examples/06-recursive-timeout.js` - polling with a recursive `setTimeout()`, one request at a time
- `examples/07-this-in-timer-callbacks.js` - a method passed to a timer loses `this`, and two fixes

Run one with `node 17-asynchronous-javascript/timers/examples/01-set-timeout.js` from the repository folder.

## Tasks
1. **Undo the delete** (`tasks/01-undo-the-delete.js`) - delete an order after 5 seconds, unless we undo it first
2. **Countdown to the sale** (`tasks/02-sale-countdown.js`) - count down every second with `setInterval()` and stop at zero
3. **Poll without overlap** (`tasks/03-poll-without-overlap.js`) - rewrite polling from `setInterval()` to a recursive `setTimeout()`

Run the tests with `npm test -- 17-asynchronous-javascript/timers`. They fail until the task is solved. Compare with `solutions/` after you try.
