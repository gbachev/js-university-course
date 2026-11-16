# Event Loop Deep Dive

Code for the lecture *Event Loop Deep Dive* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-microtasks-between-timers.js` - the microtasks of one timer run before the next timer
- `examples/02-puzzle-timers-promises-queue-microtask.js` - puzzle 1: a timer, `queueMicrotask()` and a `then()` chain
- `examples/03-puzzle-async-await.js` - puzzle 2: the code after an `await` is a microtask
- `examples/04-microtasks-starve-the-loop.js` - a microtask that queues itself keeps a timer waiting
- `examples/05-request-animation-frame.html` with `examples/05-request-animation-frame.js` - a microtask changes the text before the frame callback sees it
- `examples/06-node-phases.js` - `process.nextTick()`, promises, `setImmediate()` and a timer inside an I/O callback
- `examples/07-timeout-or-immediate.js` - `setTimeout()` against `setImmediate()` from the main script, in no fixed order

Run one with `node 17-asynchronous-javascript/event-loop-deep-dive/examples/01-microtasks-between-timers.js` from the repository folder. The page runs in the browser: we start `npm run serve`, open `17-asynchronous-javascript/event-loop-deep-dive/examples/05-request-animation-frame.html` from the address it prints and open the console.

## Tasks
1. **Predict the refresh** (`tasks/01-predict-the-refresh.js`) - predict the order of a timer, microtasks, an `await` and a `then()` chain
2. **One render per batch** (`tasks/02-one-render-per-batch.js`) - collect changes and render them once with `queueMicrotask()`
3. **Let the click in** (`tasks/03-let-the-click-in.js`) - turn a chain of microtasks into tasks queued with `setTimeout(next, 0)`, like the waiting click, so the click gets its turn

Run the tests with `npm test -- 17-asynchronous-javascript/event-loop-deep-dive`. They fail until the task is solved. Compare with `solutions/` after you try.
