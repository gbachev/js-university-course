# Newer Array Methods: at(), findLast(), toSorted() and More

Code for the lecture *Newer Array Methods: at(), findLast(), toSorted() and More* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-at.js` - `at()` reads from the end with a negative index
- `examples/02-find-last.js` - `findLast()` and `findLastIndex()` search from the end
- `examples/03-sort-changes-original.js` - `sort()` reorders the original array too
- `examples/04-to-sorted.js` - `toSorted()` returns a sorted copy and keeps the original
- `examples/05-copying-methods.js` - `toReversed()`, `toSpliced()` and `with()`, and the `RangeError` of `with()`
- `examples/06-object-group-by.js` - `Object.groupBy()` groups books by genre
- `examples/07-group-by-computed-key.js` - a computed group key, and an object without a prototype

Run one with `node 08-arrays-and-keyed-collections/newer-array-methods/examples/01-at.js` from the repository folder.

## Tasks
1. **The last failed payment** (`tasks/01-last-failed-payment.js`) - read the newest payment and find the newest one with a given status
2. **Keep the original** (`tasks/02-keep-the-original.js`) - rewrite four functions that change the reading list so they return a new array instead
3. **Orders by month** (`tasks/03-orders-by-month.js`) - group orders by the month of their date and add up one month

Run the tests with `npm test -- 08-arrays-and-keyed-collections/newer-array-methods`. They fail until the task is solved. Compare with `solutions/` after you try.
