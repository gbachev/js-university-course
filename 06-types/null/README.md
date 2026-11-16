# null

Code for the lecture *null* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-typeof-null.js` - `null` and the `"object"` that `typeof` gives for it
- `examples/02-checking-for-null.js` - a falsy check is not a check for `null`, a strict comparison is
- `examples/03-null-vs-undefined.js` - `null` and `undefined` are loosely equal, but not strictly equal

Run one with `node 06-types/null/examples/01-typeof-null.js` from the repository folder.

## Tasks
1. **No phone number** (`tasks/01-no-phone-number.js`) - show a text instead of a phone number that is `null`
2. **Discount label** (`tasks/02-discount-label.js`) - fix a label that treats a discount of 0 as no discount
3. **Empty or not set?** (`tasks/03-empty-or-not-set.js`) - tell `undefined`, `null` and a real value apart

Run the tests with `npm test -- 06-types/null`. They fail until the task is solved. Compare with `solutions/` after you try.
