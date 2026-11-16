# Creating Arrays

Code for the lecture *Creating Arrays* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-array-literals.js` - arrays with square brackets
- `examples/02-nested-arrays.js` - arrays inside an array
- `examples/03-sparse-literal.js` - blank spots between commas leave empty slots
- `examples/04-array-constructor.js` - `new Array()` with no, one or more arguments
- `examples/05-fill.js` - `fill()` gives every slot a value
- `examples/06-array-of.js` - `Array.of()` makes an array of its arguments, also of one number
- `examples/07-array-from.js` - `Array.from()` from a string, and with a mapping function
- `examples/08-array-from-nodelist.html` - `Array.from()` turns a NodeList into an array (browser)
- `examples/09-spread.js` - copy, split a string and merge with the spread syntax

Run one with `node 08-arrays-and-keyed-collections/creation/examples/01-array-literals.js` from the repository folder. For the `.html` example, run `npm run serve`, open `08-arrays-and-keyed-collections/creation/examples/08-array-from-nodelist.html` from the address it prints and look at the console.

## Tasks
1. **A row of free seats** (`tasks/01-seat-row.js`) - create an array of a given length with the same value in every slot
2. **Start a cart with one price** (`tasks/02-start-cart.js`) - fix a cart that the Array constructor fills with empty slots
3. **The characters of a coupon code** (`tasks/03-coupon-characters.js`) - turn a string into an array of uppercase characters

Run the tests with `npm test -- 08-arrays-and-keyed-collections/creation`. They fail until the task is solved. Compare with `solutions/` after you try.
