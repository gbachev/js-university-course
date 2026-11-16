# What Is an Array?

Code for the lecture *What Is an Array?* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-array-basics.js` - read elements by index, and an array is an object
- `examples/02-dynamic-arrays.js` - an array grows when we assign to a new index or `push()`
- `examples/03-mixed-types.js` - one array can hold values of different types
- `examples/04-length.js` - `length` updates as we add elements
- `examples/05-sparse-array.js` - assigning past the end leaves empty slots
- `examples/06-empty-slots.js` - empty slots and indexes past the end read as `undefined`
- `examples/07-compare-by-reference.js` - two arrays with the same items are not equal

Run one with `node 08-arrays-and-keyed-collections/what-is-array/examples/01-array-basics.js` from the repository folder.

## Tasks
1. **The last item in the cart** (`tasks/01-last-item.js`) - return the last element of an array, or `undefined` for an empty one
2. **The same shopping list?** (`tasks/02-same-list.js`) - compare two arrays element by element
3. **Count the booked seats** (`tasks/03-booked-seats.js`) - fix a count that includes the empty slots of a sparse array

Run the tests with `npm test -- 08-arrays-and-keyed-collections/what-is-array`. They fail until the task is solved. Compare with `solutions/` after you try.
