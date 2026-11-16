# JavaScript Engine

Code for the lecture *JavaScript Engine* (section 3, JavaScript Foundations) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-engine-and-runtime.js` - what comes from the language and what from the runtime (`setTimeout`, `document`)
- `examples/02-deoptimization.js` - a function called many times with numbers, then once with a string
- `examples/03-call-stack-and-heap.js` - an object in the heap and two function calls on the stack
- `examples/04-stack-overflow.js` - a function that calls itself without stopping: `RangeError`
- `examples/05-feature-detection.js` - checking that `Object.groupBy` exists before we use it

Run one with `node 03-javascript-foundations/javascript-engine/examples/01-engine-and-runtime.js` from the repository folder. The first example prints `object` for `document` when we paste it into the browser console instead.
