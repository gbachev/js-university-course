# Type Casting and Coercion

Code for the lecture *Type Casting and Coercion* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-casting-to-boolean.js` - `Boolean()` on values of every type
- `examples/02-casting-to-number.js` - `Number()` on values of every type, and the `TypeError` for a symbol
- `examples/03-casting-to-bigint.js` - `BigInt()` on the values it converts, and the errors for the ones it cannot
- `examples/04-casting-to-string.js` - `String()` on values of every type
- `examples/05-type-coercion.js` - implicit conversions with `+`, `-`, `/`, `*`, `!` and in conditions

Run one with `node 06-types/type-casting-and-conversions/examples/01-casting-to-boolean.js` from the repository folder.

## Tasks
1. **Read the age** (`tasks/01-read-the-age.js`) - cast a form field to a number, with `null` for text and empty fields
2. **The same product ID** (`tasks/02-same-product-id.js`) - fix a loose comparison that matches the wrong IDs
3. **A setting from a file** (`tasks/03-setting-from-a-file.js`) - fix a cast that turns the string `'false'` into `true`

Run the tests with `npm test -- 06-types/type-casting-and-conversions`. They fail until the task is solved. Compare with `solutions/` after you try.
