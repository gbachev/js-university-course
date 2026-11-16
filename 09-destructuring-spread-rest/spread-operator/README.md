# The Spread Operator

Code for the lecture *The Spread Operator* (section 9, Destructuring, Spread and Rest) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-spreading-arrays.js` - merge and copy arrays with spread
- `examples/02-inserting-elements.js` - add new items around the spread values
- `examples/03-spreading-objects.js` - user settings over the defaults, the later properties win
- `examples/04-merging-objects.js` - three objects merged into one user profile
- `examples/05-function-calls.js` - pass the items of an array as separate arguments

Run one with `node 09-destructuring-spread-rest/spread-operator/examples/01-spreading-arrays.js` from the repository folder.

## Tasks
1. **Add to cart** (`tasks/01-add-to-cart.js`) - return a new cart with one more product
2. **Update a product** (`tasks/02-update-product.js`) - apply the changes to a product while its id stays the same
3. **Insert a book** (`tasks/03-insert-book.js`) - put a book at a position in a new reading list

Run the tests with `npm test -- 09-destructuring-spread-rest/spread-operator`. They fail until the task is solved. Compare with `solutions/` after you try.
