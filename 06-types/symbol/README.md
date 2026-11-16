# Symbol

Code for the lecture *Symbol* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-symbol-as-a-key.js` - a symbol as the key of an object property
- `examples/02-symbol-iterator.js` - `Symbol.iterator` makes a plain object work with `for...of`
- `examples/03-every-symbol-is-unique.js` - two symbols with the same description are not equal
- `examples/04-new-symbol.js` - `new Symbol()` throws a `TypeError`
- `examples/05-symbol-for.js` - a shared symbol with `Symbol.for()`
- `examples/06-global-symbol-registry.js` - `Symbol.for()` and `Symbol.keyFor()` with the global Symbol registry
- `examples/07-symbol-keys-are-hidden.js` - symbol keys are skipped by `Object.keys()`, `JSON.stringify()` and `for...in`

Run one with `node 06-types/symbol/examples/01-symbol-as-a-key.js` from the repository folder.

## Tasks
1. **A hidden internal ID** (`tasks/01-hidden-internal-id.js`) - store an ID under a symbol key so lists and JSON do not show it
2. **A shared app symbol** (`tasks/02-shared-app-symbol.js`) - fix a function that should give the same symbol for the same name
3. **Count the keys** (`tasks/03-count-the-keys.js`) - count the string keys and the symbol keys of an object

Run the tests with `npm test -- 06-types/symbol`. They fail until the task is solved. Compare with `solutions/` after you try.
