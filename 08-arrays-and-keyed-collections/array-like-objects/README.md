# Array-Like Objects and Array.from()

Code for the lecture *Array-Like Objects and Array.from()* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-arguments.js` - `arguments` is array-like, not an array
- `examples/02-no-array-methods.js` - a string has indexes and a length, but no array methods
- `examples/03-array-from-arguments.js` - `Array.from()` turns `arguments` into an array
- `examples/04-array-from-string.js` - `Array.from()` splits a string into characters
- `examples/05-array-from-nodelist.html` - `Array.from()` turns a NodeList into an array (browser)
- `examples/06-slice-call.js` - the older way with `Array.prototype.slice.call()`
- `examples/07-array-from-mapping.js` - a mapping function as the second argument
- `examples/08-array-from-vs-spread.js` - spread needs an iterable, `Array.from()` does not
- `examples/09-patterns.js` - build sequences from `{ length: 5 }`
- `examples/10-polyfill.js` - a polyfill for `Array.from()`
- `examples/11-custom-array-like.js` - our own array-like object, turned into an array

Run one with `node 08-arrays-and-keyed-collections/array-like-objects/examples/01-arguments.js` from the repository folder. For the `.html` example, run `npm run serve`, open `08-arrays-and-keyed-collections/array-like-objects/examples/05-array-from-nodelist.html` from the address it prints and look at the console.

## Tasks
1. **Add up any number of prices** (`tasks/01-sum-all.js`) - turn `arguments` into an array and add up its values
2. **Titles from the search results** (`tasks/02-search-results.js`) - fix a spread that throws on an array-like object
3. **Ticket numbers** (`tasks/03-ticket-numbers.js`) - build a numbered list with `Array.from({ length })`

Run the tests with `npm test -- 08-arrays-and-keyed-collections/array-like-objects`. They fail until the task is solved. Compare with `solutions/` after you try.
