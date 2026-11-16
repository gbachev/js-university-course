# Array Methods

Code for the lecture *Array Methods* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-push.js` - `push()` adds at the end and returns the new length
- `examples/02-pop.js` - `pop()` removes the last element and returns it
- `examples/03-unshift.js` - `unshift()` adds at the beginning and returns the new length
- `examples/04-shift.js` - `shift()` removes the first element and returns it
- `examples/05-splice-remove.js` - `splice()` removes elements from a position
- `examples/06-splice-replace.js` - `splice()` replaces elements with new ones
- `examples/07-splice-insert.js` - `splice()` with a `deleteCount` of 0 only inserts
- `examples/08-slice.js` - `slice()` copies a part and leaves the original as it is
- `examples/09-slice-to-the-end.js` - `slice()` with one argument copies to the end
- `examples/10-slice-negative.js` - a negative index counts from the end
- `examples/11-concat.js` - `concat()` merges arrays into a new one
- `examples/12-join.js` - `join()` turns the elements into one string
- `examples/13-index-of.js` - `indexOf()` gives the position, or `-1`
- `examples/14-includes.js` - `includes()` gives `true` or `false`

Run one with `node 08-arrays-and-keyed-collections/methods/examples/01-push.js` from the repository folder.

## Tasks
1. **Remove an item from the cart** (`tasks/01-remove-item.js`) - find a product with `indexOf()` and remove it with `splice()`
2. **One page of products** (`tasks/02-page-of-products.js`) - copy one page of a list with `slice()`
3. **The guest list** (`tasks/03-guest-list.js`) - join names into a sentence with commas and "and"

Run the tests with `npm test -- 08-arrays-and-keyed-collections/methods`. They fail until the task is solved. Compare with `solutions/` after you try.
