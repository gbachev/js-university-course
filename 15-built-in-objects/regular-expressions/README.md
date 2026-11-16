# Regular Expressions

Code for the lecture *Regular Expressions* (section 15, Built-in Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-creating.js` - a regex literal and the `RegExp` constructor, with `test()` and `source`
- `examples/02-validating-input.js` - a ZIP code and an order number, anchored with `^` and `$`, and the `i` flag
- `examples/03-finding-matches.js` - `match()` with and without `g`, and greedy vs lazy quantifiers
- `examples/04-match-all-named-groups.js` - `matchAll()` with named groups to read every date in a text
- `examples/05-replacing-with-groups.js` - `replace()` with named groups and with a function, and `replaceAll()` without `g`
- `examples/06-g-flag-last-index.js` - the `lastIndex` trap of `test()` with the `g` flag
- `examples/07-escaping-user-input.js` - escaping user input before it goes into `new RegExp()`
- `examples/08-lookahead.js` - a lookahead that checks a password contains a digit

Run one with `node 15-built-in-objects/regular-expressions/examples/01-creating.js` from the repository folder.

## Tasks
1. **Is the coupon code valid?** (`tasks/01-valid-coupon.js`) - fix a coupon check that accepts extra text and flips on a second call
2. **Find the order numbers** (`tasks/02-order-numbers.js`) - pull every order number out of an email with `matchAll()` and named groups
3. **Highlight the search** (`tasks/03-highlight-search.js`) - wrap every match of what the user typed in brackets, with the input escaped

Run the tests with `npm test -- 15-built-in-objects/regular-expressions`. They fail until the task is solved. Compare with `solutions/` after you try.
