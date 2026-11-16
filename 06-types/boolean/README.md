# Boolean

Code for the lecture *Boolean* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-wrapper-is-truthy.js` - `new Boolean(false)` is an object, so it is truthy
- `examples/02-false-and-true-wrappers.js` - the values that create a false or a true `Boolean` wrapper object

Run one with `node 06-types/boolean/examples/01-wrapper-is-truthy.js` from the repository folder.

## Tasks
1. **Is the field filled in?** (`tasks/01-is-the-field-filled.js`) - turn any form value into `true` or `false`
2. **Feature flag** (`tasks/02-feature-flag.js`) - fix a check that turns on every feature stored as a `Boolean` wrapper object

Run the tests with `npm test -- 06-types/boolean`. They fail until the task is solved. Compare with `solutions/` after you try.
