# Looping Through Arrays

Code for the lecture *Looping Through Arrays* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-for-loop.js` - the classic `for` loop with an index
- `examples/02-for-loop-break.js` - leave the loop early with `break`
- `examples/03-for-of.js` - `for...of` gives the values directly
- `examples/04-for-of-entries.js` - `for...of` with `entries()` for the index and the value
- `examples/05-for-each.js` - `forEach()` calls a function for each element
- `examples/06-for-each-sparse.js` - `forEach()` skips the holes of a sparse array
- `examples/07-map.js` - `map()` builds a new array from the results
- `examples/08-while.js` - a `while` loop over an array
- `examples/09-do-while.js` - a `do...while` loop over an array
- `examples/10-for-in-pitfall.js` - `for...in` also lists a property we added to the array

Run one with `node 08-arrays-and-keyed-collections/looping/examples/01-for-loop.js` from the repository folder.

## Tasks
1. **The cart total** (`tasks/01-cart-total.js`) - add up the prices of a cart with `for...of`
2. **The first product over budget** (`tasks/02-first-over-budget.js`) - find the first price over a limit and stop the loop there
3. **A numbered reading list** (`tasks/03-numbered-list.js`) - fix a `for...in` loop that numbers the books wrong

Run the tests with `npm test -- 08-arrays-and-keyed-collections/looping`. They fail until the task is solved. Compare with `solutions/` after you try.
