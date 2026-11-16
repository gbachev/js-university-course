# Copying and Merging Arrays

Code for the lecture *Copying and Merging Arrays* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-spread-copy.js` - a copy with the spread syntax is a new array
- `examples/02-shallow-copy.js` - the nested arrays of a shallow copy are still shared
- `examples/03-slice-copy.js` - `slice()` without arguments copies the array
- `examples/04-spread-merge.js` - merge two arrays with the spread syntax
- `examples/05-spread-with-values.js` - mix spread arrays with other values
- `examples/06-concat.js` - merge arrays with `concat()`

Run one with `node 08-arrays-and-keyed-collections/copying-merging/examples/01-spread-copy.js` from the repository folder.

## Tasks
1. **Merge two carts** (`tasks/01-merge-carts.js`) - merge two arrays into a new one and leave both as they are
2. **A draft of the order** (`tasks/02-draft-order.js`) - fix a "copy" that only copies the reference
3. **Copy the seating plan** (`tasks/03-copy-seating-plan.js`) - copy an array of arrays so the inner arrays are not shared

Run the tests with `npm test -- 08-arrays-and-keyed-collections/copying-merging`. They fail until the task is solved. Compare with `solutions/` after you try.
