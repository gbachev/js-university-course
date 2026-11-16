# Other Operators

Code for the lecture *Other Operators* (section 4, Operators) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-string-concatenation.js` - `+` joins strings
- `examples/02-number-plus-string.js` - a number plus a string gives a string, and how `Number()` fixes it
- `examples/03-delete.js` - `delete` removes a property from an object
- `examples/04-typeof.js` - `typeof` returns the type of a value as a string
- `examples/05-in.js` - `in` checks if an object has a property

Run one with `node 04-operators/other/examples/01-string-concatenation.js` from the repository folder.

## Tasks
1. **The order total** (`tasks/01-order-total.js`) - fix a total that glues the shipping cost to the subtotal as text
2. **Format the price** (`tasks/02-format-price.js`) - show a price only when it is a number, with `typeof`
3. **The public profile** (`tasks/03-public-profile.js`) - check fields with `in` and remove the password with `delete`

Run the tests with `npm test -- 04-operators/other`. They fail until the task is solved. Compare with `solutions/` after you try.
