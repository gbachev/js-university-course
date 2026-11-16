# Callback Functions

Code for the lecture *Callback Functions* (section 14, More on Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-functions-are-values.js` - a function stored in a variable and in an object
- `examples/02-callbacks-we-know.js` - the callbacks of `forEach()`, `map()` and `sort()`
- `examples/03-count-where.js` - our own `countWhere()` that takes a test callback
- `examples/04-callback-arguments.js` - `importUsers()` decides the arguments of its progress callback
- `examples/05-map-parse-int.js` - why `map(parseInt)` gives `[10, NaN, 2]`
- `examples/06-fn-not-fn-call.js` - passing `byPrice` versus calling `byPrice()`

Run one with `node 14-more-on-functions/callbacks/examples/01-functions-are-values.js` from the repository folder.

## Tasks
1. **Our own map** (`tasks/01-map-prices.js`) - write a function that calls a callback with each price and its index
2. **The quantity field** (`tasks/02-parse-quantities.js`) - fix the `map(parseInt)` bug in an order form
3. **Sort by anything** (`tasks/03-sort-by.js`) - sort a copy of a list by the number a callback gives

Run the tests with `npm test -- 14-more-on-functions/callbacks`. They fail until the task is solved. Compare with `solutions/` after you try.
