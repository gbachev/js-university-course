# Comparison Operators

Code for the lecture *Comparison Operators* (section 4, Operators) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-strict-equality.js` - `===` and `!==` with numbers and strings
- `examples/02-loose-equality.js` - `==` and `!=` convert the operands before comparing
- `examples/03-relational-operators.js` - `>`, `>=`, `<` and `<=`, also with a number in a string

Run one with `node 04-operators/comparison/examples/01-strict-equality.js` from the repository folder.

## Tasks
1. **Strict or loose?** (`tasks/01-strict-or-loose.js`) - fix a score check that treats `10` and `'10'` as the same score
2. **Free shipping** (`tasks/02-free-shipping.js`) - check if an order total reaches the free shipping threshold
3. **Is the coupon still valid?** (`tasks/03-coupon-still-valid.js`) - compare two dates written as strings

Run the tests with `npm test -- 04-operators/comparison`. They fail until the task is solved. Compare with `solutions/` after you try.
