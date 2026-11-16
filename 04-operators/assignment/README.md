# Assignment Operators

Code for the lecture *Assignment Operators* (section 4, Operators) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-compound-assignment.js` - `+=`, `*=`, `/=` and `**=` on one variable
- `examples/02-chained-assignment.js` - `a = b = c = d`, evaluated right to left

Run one with `node 04-operators/assignment/examples/01-compound-assignment.js` from the repository folder.

## Tasks
1. **Cart total** (`tasks/01-cart-total.js`) - add a product to a cart total with `+=`
2. **Loyalty points** (`tasks/02-loyalty-points.js`) - fix a points counter that loses the customer's points
3. **Split the bill** (`tasks/03-split-the-bill.js`) - add a tip, then share the bill, with two compound assignments

Run the tests with `npm test -- 04-operators/assignment`. They fail until the task is solved. Compare with `solutions/` after you try.
