# Nullish Coalescing

Code for the lecture *Nullish Coalescing* (section 4, Operators) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-defaults-with-or.js` - `||` replaces `0`, `''` and `false` with the default
- `examples/02-how-nullish-coalescing-works.js` - `??` falls back only for `null` and `undefined`
- `examples/03-nullish-or-or.js` - when `||` is the better choice for a default
- `examples/04-short-circuit-evaluation.js` - the right operand of `??` runs only when it is needed
- `examples/05-chaining.js` - `a ?? b ?? c` returns the first value that is not nullish
- `examples/06-mixing-with-and-or.js` - `??` with `||` needs parentheses
- `examples/07-nullish-assignment.js` - `??=` fills in what is missing

Run one with `node 04-operators/nullish-coalescing/examples/01-defaults-with-or.js` from the repository folder.

## Tasks
1. **Keep the zero** (`tasks/01-keep-the-zero.js`) - fix a default that throws away a volume of 0
2. **Page size** (`tasks/02-page-size.js`) - pick the page size from the URL, the saved one or a default
3. **Fill in the defaults** (`tasks/03-fill-in-defaults.js`) - fill in missing settings with `??=` and `||=`

Run the tests with `npm test -- 04-operators/nullish-coalescing`. They fail until the task is solved. Compare with `solutions/` after you try.
