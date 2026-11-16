# Accessing and Modifying Array Elements

Code for the lecture *Accessing and Modifying Array Elements* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-access-by-index.js` - read elements with square brackets
- `examples/02-missing-index.js` - an index that does not exist gives `undefined`
- `examples/03-no-dot-notation.js` - `colors.0` is a syntax error, so we use brackets
- `examples/04-modify-element.js` - assign a new value to an index
- `examples/05-const-array.js` - a `const` array can change its elements, not be reassigned
- `examples/06-add-by-index.js` - assign to the next index to add an element
- `examples/07-add-with-length.js` - `colors[colors.length]` adds at the end
- `examples/08-push.js` - `push()` adds one or more elements at the end
- `examples/09-non-index-keys.js` - negative and string keys become properties, not elements
- `examples/10-pop.js` - `pop()` removes and returns the last element
- `examples/11-shift.js` - `shift()` removes and returns the first element
- `examples/12-change-length.js` - a smaller `length` cuts the array, a bigger one adds empty slots
- `examples/13-truncate-with-length.js` - remove elements from the end with `length`
- `examples/14-dynamic-index.js` - a variable or an expression as the index
- `examples/15-index-in-a-loop.js` - change every element in a `for` loop

Run one with `node 08-arrays-and-keyed-collections/access-modify/examples/01-access-by-index.js` from the repository folder.

## Tasks
1. **The next customer** (`tasks/01-next-customer.js`) - take the first customer out of a queue
2. **Correct the last price** (`tasks/02-last-price.js`) - fix a function that writes to index `-1` instead of the last element
3. **Keep the first messages** (`tasks/03-keep-first.js`) - shorten an array with `length` without adding empty slots

Run the tests with `npm test -- 08-arrays-and-keyed-collections/access-modify`. They fail until the task is solved. Compare with `solutions/` after you try.
