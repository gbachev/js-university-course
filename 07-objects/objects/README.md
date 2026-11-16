# Objects in JavaScript

Code for the lecture *Objects in JavaScript* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-object-literal.js` - an object with properties and a method
- `examples/02-passed-by-reference.js` - a function changes the object we pass in, but not the primitive
- `examples/03-identity-comparison.js` - `===` on objects compares references, not structure

Run one with `node 07-objects/objects/examples/01-object-literal.js` from the repository folder.

## Tasks
1. **Add points** (`tasks/01-add-points.js`) - change a player's score through the object passed to a function
2. **Same address?** (`tasks/02-same-address.js`) - compare two addresses by their values, not by reference
3. **A discount that keeps the original** (`tasks/03-discount-copy.js`) - fix a function that changes the product we pass in

Run the tests with `npm test -- 07-objects/objects`. They fail until the task is solved. Compare with `solutions/` after you try.
