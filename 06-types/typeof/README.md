# typeof

Code for the lecture *typeof* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-typeof-values.js` - what `typeof` gives for every primitive, objects, arrays, `null` and a function
- `examples/02-check-before-use.js` - checking the type before we call a string method
- `examples/03-typeof-nan.js` - `typeof NaN` is `"number"`

Run one with `node 06-types/typeof/examples/01-typeof-values.js` from the repository folder.

## Tasks
1. **A usable number** (`tasks/01-usable-number.js`) - accept a primitive number that is not `NaN`
2. **A better type label** (`tasks/02-type-label.js`) - give `null` its own label instead of `'object'`
3. **Format any input** (`tasks/03-format-any-input.js`) - fix a function that calls `trim()` on values that are not strings

Run the tests with `npm test -- 06-types/typeof`. They fail until the task is solved. Compare with `solutions/` after you try.
