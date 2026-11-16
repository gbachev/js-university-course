# Number

Code for the lecture *Number* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-number-values.js` - zero, integers, decimals, scientific notation and a `Number` wrapper object
- `examples/02-arithmetic.js` - addition, subtraction, multiplication, division and remainder
- `examples/03-number-parseint-parsefloat.js` - `Number()`, `Number.parseInt()` and `Number.parseFloat()` on the same values
- `examples/04-numeric-context.js` - when `+` concatenates and when JavaScript converts a string into a number
- `examples/05-special-values.js` - `Infinity`, `-Infinity` and `NaN`
- `examples/06-numeric-strings.js` - strings that hold a number convert to that number
- `examples/07-number-limits.js` - `Number.MAX_VALUE`, `MIN_VALUE`, the safe integer limits and `EPSILON`
- `examples/08-floating-point.js` - `0.1 + 0.2` and the rounding errors of floating-point numbers
- `examples/09-math.js` - a few constants and methods of the `Math` object

Run one with `node 06-types/number/examples/01-number-values.js` from the repository folder.

## Tasks
1. **Parse the price** (`tasks/01-parse-the-price.js`) - read a price out of a text like `'19.99 EUR'`
2. **Cart total** (`tasks/02-cart-total.js`) - round a cart total to 2 decimal places to hide floating-point errors
3. **A valid quantity** (`tasks/03-valid-quantity.js`) - accept only whole numbers from 1 to 99

Run the tests with `npm test -- 06-types/number`. They fail until the task is solved. Compare with `solutions/` after you try.
