# Bitwise Operators

Code for the lecture *Bitwise Operators* (section 4, Operators) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-nine-to-binary.js` - convert 9 to binary step by step
- `examples/02-thirteen-to-binary-and-back.js` - convert 13 to binary, then 1101 back to decimal
- `examples/03-parseint-and-tostring.js` - `parseInt(text, 2)` and `toString(2)` convert for us
- `examples/04-bitwise-logical-operators.js` - `&`, `|`, `^` and `~` on 13 and 9
- `examples/05-bitwise-shift-operators.js` - `>>` and `<<` on 8 and 11

Run one with `node 04-operators/bitwise/examples/01-nine-to-binary.js` from the repository folder.

## Tasks
1. **To binary and back** (`tasks/01-binary-and-back.js`) - convert numbers to binary strings and back
2. **Permission flags** (`tasks/02-permission-flags.js`) - check and grant permissions stored as bits
3. **Revoke a permission** (`tasks/03-revoke-permission.js`) - fix a revoke that grants a permission the user did not have

Run the tests with `npm test -- 04-operators/bitwise`. They fail until the task is solved. Compare with `solutions/` after you try.
