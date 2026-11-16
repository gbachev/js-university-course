# undefined

Code for the lecture *undefined* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-undefined-values.js` - variables without a value, a missing property and a missing array index
- `examples/02-checking-for-undefined.js` - checking for `undefined` with `typeof` and with `===`
- `examples/03-parameters-and-return-values.js` - parameters we do not pass, and a function without `return`

Run one with `node 06-types/undefined/examples/01-undefined-values.js` from the repository folder.

## Tasks
1. **Default quantity** (`tasks/01-default-quantity.js`) - use a quantity of 1 when the quantity is not passed
2. **Unanswered questions** (`tasks/02-unanswered-questions.js`) - fix a check that treats 0, `false` and `''` as missing answers
3. **Items in stock** (`tasks/03-items-in-stock.js`) - read a product's stock and return 0 when the product is missing

Run the tests with `npm test -- 06-types/undefined`. They fail until the task is solved. Compare with `solutions/` after you try.
