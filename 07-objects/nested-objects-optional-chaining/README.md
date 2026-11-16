# Nested Objects and Optional Chaining

Code for the lecture *Nested Objects and Optional Chaining* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-nested-objects.js` - an object inside an object, read with dot and bracket notation
- `examples/02-deep-access-error.js` - the `TypeError` of a missing link, and the manual `&&` check
- `examples/03-optional-chaining.js` - `?.` with properties, brackets, method calls and arrays
- `examples/04-short-circuiting.js` - the chain stops at the first missing link
- `examples/05-api-response.js` - reading deep data from an API response
- `examples/06-optional-chaining-vs-logical-and.js` - the same read with `&&` and with `?.`
- `examples/07-no-assignment.js` - we cannot assign through `?.`

Run one with `node 07-objects/nested-objects-optional-chaining/examples/01-nested-objects.js` from the repository folder.

## Tasks
1. **The shipping city** (`tasks/01-shipping-city.js`) - read a city deep in an order, with a fallback when a part is missing
2. **The first item** (`tasks/02-first-item.js`) - fix a function that crashes on orders without items
3. **Send a notification** (`tasks/03-send-notification.js`) - call a nested method only when it exists

Run the tests with `npm test -- 07-objects/nested-objects-optional-chaining`. They fail until the task is solved. Compare with `solutions/` after you try.
