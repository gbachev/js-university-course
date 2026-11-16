# 'use strict'

Code for the lecture *'use strict'* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-strict-mode-on.cjs` - the directive at the top of a script turns strict mode on
- `examples/02-enabling-strict-mode.cjs` - strict mode for one function only
- `examples/03-implicit-globals-sloppy.cjs` - in sloppy mode, an undeclared variable becomes a global
- `examples/04-implicit-globals-strict.cjs` - in strict mode, the same assignment throws a `ReferenceError`
- `examples/05-duplicate-parameters.cjs` - duplicate parameter names work in sloppy mode only
- `examples/06-this-sloppy.cjs` - in sloppy mode, `this` in a plain call is the global object
- `examples/07-this-strict.cjs` - in strict mode, it is `undefined`
- `examples/08-non-writable.cjs` - assigning to `Math.PI` is ignored in sloppy mode and throws in strict mode
- `examples/09-strict-syntax-errors.js` - `delete` on a variable, octal literals and reserved words

Run one with `node 11-scope-and-variables/use-strict/examples/01-strict-mode-on.cjs` from the repository folder. Most examples end in `.cjs`, so Node runs them as plain scripts in sloppy mode and the `'use strict'` directive is what switches strict mode on. Files that end in `.js` are modules, and modules are always strict.

## Tasks
1. **Find the typo** (`tasks/01-find-the-typo.js`) - fix the typo that strict mode turns into a `ReferenceError`
2. **No more this** (`tasks/02-no-more-this.js`) - fix a function that reads `this` in a plain call
3. **Frozen settings** (`tasks/03-frozen-settings.js`) - return a new settings object instead of changing a frozen one

Run the tests with `npm test -- 11-scope-and-variables/use-strict`. They fail until the task is solved. Compare with `solutions/` after you try.
