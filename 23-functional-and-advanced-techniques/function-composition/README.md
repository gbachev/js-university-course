# Function Composition

Code for the lecture *Function Composition* (section 23, Functional and Advanced Techniques) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-nested-calls.js` - an order total in four steps, nested by hand
- `examples/02-pipe-and-compose.js` - `pipe()` and `compose()` format a book title
- `examples/03-point-free.js` - the same function with a named argument and point-free
- `examples/04-map-parseint.js` - why `map(parseInt)` gives `NaN`
- `examples/05-immutability.js` - a step that returns a new array and one that changes its input
- `examples/06-tap.js` - `tap()` logs the value in the middle of a pipeline

Run one with `node 23-functional-and-advanced-techniques/function-composition/examples/01-nested-calls.js` from the repository folder.

## Tasks
1. **Pipe and compose** (`tasks/01-pipe-and-compose.js`) - the two helpers that join any number of steps
2. **The checkout pipeline** (`tasks/02-checkout-pipeline.js`) - curried discount and tax steps in an order total pipeline
3. **Debug without breaking the pipeline** (`tasks/03-tap.js`) - a `tap()` step that fixes a pipeline broken by its logging step

Run the tests with `npm test -- 23-functional-and-advanced-techniques/function-composition`. They fail until the task is solved. Compare with `solutions/` after you try.
