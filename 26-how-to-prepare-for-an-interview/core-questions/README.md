# Core JavaScript Questions

Code for the lecture *Core JavaScript Questions* (section 24, How to Prepare for an Interview) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-closure-counter.js` - a closure keeps its own `count` between calls
- `examples/02-hoisting-and-tdz.js` - a hoisted function, a `var` that starts as `undefined` and a `let` in the TDZ
- `examples/03-lost-this.js` - a method pulled off its object loses `this`, and `bind` fixes it
- `examples/04-prototypes-and-classes.js` - a class is a function, and its methods live on the prototype
- `examples/05-loose-and-strict-equality.js` - `==` converts, `===` does not, and `NaN` equals nothing
- `examples/06-event-loop-order.js` - synchronous code, then microtasks, then the timer
- `examples/07-then-and-await.js` - the same promise handled with `then` and with `async`/`await`
- `examples/08-shallow-and-deep-copy.js` - spread shares the nested array, `structuredClone` copies it

Run one with `node 26-how-to-prepare-for-an-interview/core-questions/examples/01-closure-counter.js` from the repository folder.

## Tasks
1. **The size buttons** (`tasks/01-size-buttons.js`) - fix the classic `var` loop bug where every handler sees the last size
2. **Keep this** (`tasks/02-keep-this.js`) - make a like handler keep its post when the button calls it as a plain function
3. **Predict the order** (`tasks/03-predict-the-order.js`) - write down the order of timers, promises and an `async` function, and let the tests prove it

Run the tests with `npm test -- 26-how-to-prepare-for-an-interview/core-questions`. They fail until the task is solved. Compare with `solutions/` after you try.
