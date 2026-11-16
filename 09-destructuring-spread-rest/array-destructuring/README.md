# Array Destructuring

Code for the lecture *Array Destructuring* (section 9, Destructuring, Spread, Rest) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-basic-syntax.js` - variables get the values by their position in the array
- `examples/02-fewer-and-more-variables.js` - extra values are ignored, extra variables are `undefined`
- `examples/03-skipping-elements.js` - skip elements with an extra comma
- `examples/04-rest-in-destructuring.js` - collect the remaining items with `...`
- `examples/05-swapping-variables.js` - swap two variables without a temporary variable
- `examples/06-function-returns.js` - unpack the array a function returns

Run one with `node 09-destructuring-spread-rest/array-destructuring/examples/01-basic-syntax.js` from the repository folder.

## Tasks
1. **The race podium** (`tasks/01-race-podium.js`) - take the first three runners of a race out of the results
2. **Read an order row** (`tasks/02-order-row.js`) - get the order id and the total from a text row, skipping the values we do not need
3. **The price filter** (`tasks/03-price-range.js`) - fix the swap that puts the smaller price first

Run the tests with `npm test -- 09-destructuring-spread-rest/array-destructuring`. They fail until the task is solved. Compare with `solutions/` after you try.
