# Logical Operators

Code for the lecture *Logical Operators* (section 4, Operators) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-combining-conditions.js` - `||` and `&&` in one `if` condition
- `examples/02-logical-and.js` - `&&` with booleans and with other values
- `examples/03-logical-or.js` - `||` with booleans and with other values
- `examples/04-logical-not.js` - `!` turns a value into the opposite boolean
- `examples/05-short-circuit-evaluation.js` - where the evaluation of `&&` and `||` stops
- `examples/06-parentheses.js` - parentheses decide what is evaluated first

Run one with `node 04-operators/logical/examples/01-combining-conditions.js` from the repository folder.

## Tasks
1. **Can we check out?** (`tasks/01-can-check-out.js`) - combine two conditions with `&&`
2. **Display name** (`tasks/02-display-name.js`) - pick the first name that is not empty with `||`
3. **The discount rule** (`tasks/03-discount-rule.js`) - fix a condition that mixes `&&` and `||` without parentheses

Run the tests with `npm test -- 04-operators/logical`. They fail until the task is solved. Compare with `solutions/` after you try.
