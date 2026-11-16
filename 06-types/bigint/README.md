# BigInt

Code for the lecture *BigInt* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-creating-bigint.js` - a BigInt literal with `n` and the `BigInt()` function
- `examples/02-arithmetic.js` - arithmetic with BigInt values, and the `TypeError` when we mix them with numbers
- `examples/03-comparisons.js` - comparing BigInt values with BigInt values and with numbers

Run one with `node 06-types/bigint/examples/01-creating-bigint.js` from the repository folder.

## Tasks
1. **The next order ID** (`tasks/01-next-order-id.js`) - turn a huge ID from a string into a BigInt and add one
2. **Total views** (`tasks/02-total-views.js`) - fix an addition that mixes a BigInt and a number
3. **Share the points** (`tasks/03-share-the-points.js`) - divide BigInt points between players and keep what is left over

Run the tests with `npm test -- 06-types/bigint`. They fail until the task is solved. Compare with `solutions/` after you try.
