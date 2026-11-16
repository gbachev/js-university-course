# The for...in and for...of Loops

Code for the lecture *The for...in and for...of Loops* (section 5, Control Flow) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-for-of-array.js` - `for...of` over the values of an array
- `examples/02-for-of-string.js` - `for...of` over the letters of a string
- `examples/03-for-in-object.js` - `for...in` over the keys of an object
- `examples/04-for-in-array.js` - `for...in` over an array gives its indexes
- `examples/05-object-entries.js` - `Object.entries()` with `for...of` for keys and values

Run one with `node 05-control-flow/for-in-for-of/examples/01-for-of-array.js` from the repository folder.

## Tasks
1. **Count a character** (`tasks/01-count-a-character.js`) - count how often a character appears in a message with `for...of`
2. **Order summary** (`tasks/02-order-summary.js`) - build a one-line summary of an order with `for...in`
3. **Items in the cart** (`tasks/03-items-in-the-cart.js`) - fix the loop that tries `for...of` on a plain object

Run the tests with `npm test -- 05-control-flow/for-in-for-of`. They fail until the task is solved. Compare with `solutions/` after you try.
