# String

Code for the lecture *String* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-characters-by-index.js` - reading characters by their index
- `examples/02-string-literals.js` - single quotes, double quotes, backticks and a `String` wrapper object
- `examples/03-quotes-inside-strings.js` - double quotes inside single quotes, and the other way round
- `examples/04-escaping-quotes.js` - escaping a quote with a backslash
- `examples/05-concatenation.js` - joining strings with `+`, also with a number
- `examples/06-long-strings.js` - three ways to write a long string
- `examples/07-template-literals.js` - a template literal over several lines with an embedded expression
- `examples/08-length.js` - the `length` of a string
- `examples/09-accessing-characters.js` - `[i]`, `charAt()`, `for...of` and the spread syntax over a string
- `examples/10-substring-extraction.js` - `slice()`, `substring()` and the deprecated `substr()`
- `examples/11-searching.js` - `indexOf()`, `lastIndexOf()`, `startsWith()`, `endsWith()` and `includes()`
- `examples/12-replace-trim-split-join.js` - `replace()`, the trim methods, `split()` and `join()`
- `examples/13-case-conversion.js` - `toLowerCase()` and `toUpperCase()`
- `examples/14-comparing-strings.js` - comparing strings with `===`, `>=` and `==`
- `examples/15-regular-expressions.js` - `match()`, `replace()`, `search()` and `split()` with regular expressions
- `examples/16-replace-all.js` - `replaceAll()`

Run one with `node 06-types/string/examples/01-characters-by-index.js` from the repository folder. The lecture's snippet with the unclosed quotes is not here: it is a syntax error, so the file would not run at all.

## Tasks
1. **Initials** (`tasks/01-initials.js`) - get the uppercase initials out of a full name
2. **Order summary** (`tasks/02-order-summary.js`) - build an order line with a template literal
3. **A URL slug** (`tasks/03-url-slug.js`) - turn a post title into a lowercase address with dashes

Run the tests with `npm test -- 06-types/string`. They fail until the task is solved. Compare with `solutions/` after you try.
