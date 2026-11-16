# Private Fields and Static Properties

Code for the lecture *Private Fields and Static Properties* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-underscore-convention.js` - an `_balance` anyone can still overwrite
- `examples/02-private-fields.js` - a private `#balance` with a getter, hidden from keys, JSON and `structuredClone()`
- `examples/03-private-methods.js` - a private `#validate()` helper and a transaction history
- `examples/04-private-to-the-class.js` - a transfer between accounts and the `#balance in object` check
- `examples/05-static-members.js` - a static bank name, a private counter and a static factory
- `examples/06-static-initialization-block.js` - a static block that loads the fees once

Run one with `node 13-inheritance-and-prototype/private-fields-and-static-properties/examples/01-underscore-convention.js` from the repository folder.

## Tasks
1. **A private stock count** (`tasks/01-private-stock.js`) - move a stock count into a private field that only `remove()` can change
2. **Invoice numbers** (`tasks/02-invoice-numbers.js`) - number invoices with a private static counter
3. **Coupon factories** (`tasks/03-coupon-factories.js`) - create coupons with static factories and keep their details private

Run the tests with `npm test -- 13-inheritance-and-prototype/private-fields-and-static-properties`. They fail until the task is solved. Compare with `solutions/` after you try.
