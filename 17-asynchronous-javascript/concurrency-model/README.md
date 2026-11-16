# The JavaScript Concurrency Model

Code for the lecture *The JavaScript Concurrency Model* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-call-stack.js` - nested calls push and pop frames on the call stack
- `examples/02-run-to-completion.js` - a 0 ms timer waits for a long loop to finish
- `examples/03-two-queues.js` - a promise callback runs before a timer callback

Run one with `node 17-asynchronous-javascript/concurrency-model/examples/01-call-stack.js` from the repository folder.

## Tasks
1. **The order of the logs** (`tasks/01-order-of-the-logs.js`) - predict the order of two script logs, a timer and a promise callback
2. **Timers inside promises** (`tasks/02-timers-inside-promises.js`) - predict the order when timers queue promise callbacks and the other way round

Run the tests with `npm test -- 17-asynchronous-javascript/concurrency-model`. They fail until the task is solved. Compare with `solutions/` after you try.
