# Other Debugging Tools and Methods

Code for the lecture *Other Debugging Tools and Methods* (section 16, Error Handling and Debugging) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-console-table.js` - `console.table()` with the columns we pick
- `examples/02-console-dir.js` - `console.log()` stops at two levels of nesting, `console.dir()` with `depth: null` does not
- `examples/03-console-group.js` - nested groups with `console.group()` and `console.groupEnd()`
- `examples/04-time-and-count.js` - timing a sort with `console.time()` and counting calls with `console.count()`
- `examples/05-assert-and-trace.js` - `console.assert()` and `console.trace()`, also the file to try `node --inspect-brk` with
- `examples/06-isolate-the-bug.js` - checking each step on its own to find why `sort()` gets the top orders wrong

Run one with `node 16-error-handling-and-debugging/other-debugging-tools/examples/01-console-table.js` from the repository folder.

## Tasks
1. **The cheapest prices** (`tasks/01-cheapest-prices.js`) - isolate the step that sorts prices wrong, and fix it
2. **The orders table** (`tasks/02-orders-table.js`) - print orders with `console.table()` and only the columns we need
3. **Check the stock** (`tasks/03-check-the-stock.js`) - flag every product with a negative stock with `console.assert()`

Run the tests with `npm test -- 16-error-handling-and-debugging/other-debugging-tools`. They fail until the task is solved. Compare with `solutions/` after you try.
