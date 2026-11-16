# Nested Destructuring

Code for the lecture *Nested Destructuring* (section 9, Destructuring, Spread and Rest) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-nested-arrays.js` - a pattern that mirrors the arrays inside an array
- `examples/02-skipping-nested-values.js` - skip values at a nested level with commas
- `examples/03-nested-objects.js` - take the city and the zip out of a nested address
- `examples/04-objects-and-arrays.js` - object and array patterns inside each other

Run one with `node 09-destructuring-spread-rest/nested-destructuring/examples/01-nested-arrays.js` from the repository folder.

## Tasks
1. **The delivery label** (`tasks/01-delivery-label.js`) - build a label from the customer and the address nested in an order
2. **The route summary** (`tasks/02-route-summary.js`) - summarize a delivery route from its nested arrays of stops
3. **The missing address** (`tasks/03-missing-address.js`) - fix a destructuring that throws when a user has no address

Run the tests with `npm test -- 09-destructuring-spread-rest/nested-destructuring`. They fail until the task is solved. Compare with `solutions/` after you try.
