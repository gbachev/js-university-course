# Pure Functions and Side Effects

Code for the lecture *Pure Functions and Side Effects* (section 14, More on Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-pure-and-impure.js` - `withVat()` against a version that reads an outer variable
- `examples/02-passing-now-in.js` - passing the time in instead of reading `Date.now()`
- `examples/03-mutating-arguments.js` - an `addItem()` that changes the caller's cart
- `examples/04-pure-add-item.js` - the pure `addItem()` that copies with spread
- `examples/05-sort-in-place.js` - `sort()` changes the caller's array
- `examples/06-copying-array-methods.js` - `toSorted()`, `toReversed()`, `toSpliced()` and `with()`
- `examples/07-testing-a-pure-function.js` - testing `cartTotal()` by comparing results
- `examples/08-side-effects-at-the-edges.js` - pure functions inside, one `handleAdd()` with the side effects

Run one with `node 14-more-on-functions/pure/examples/01-pure-and-impure.js` from the repository folder.

## Tasks
1. **Is the sale on?** (`tasks/01-sale-active.js`) - make a function pure by passing the time in instead of reading `Date.now()`
2. **Remove without breaking the old cart** (`tasks/02-remove-item.js`) - return a new cart instead of changing the one we get
3. **Change the quantity** (`tasks/03-change-quantity.js`) - update one item and copy every level we change

Run the tests with `npm test -- 14-more-on-functions/pure`. They fail until the task is solved. Compare with `solutions/` after you try.
