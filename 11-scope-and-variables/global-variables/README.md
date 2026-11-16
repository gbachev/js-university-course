# Global Variables

Code for the lecture *Global Variables* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-global-object.html` - only `var` globals become properties of `window`, next to the built-in APIs (browser)
- `examples/02-var-overwrites-math.html` - a global `var Math` replaces the built-in `Math` (browser)
- `examples/03-var-let-const-on-window.html` - `var`, `let` and `const` globals on `window` (browser)
- `examples/04-lexical-environment-vs-global-object.html` - a `let` global is not a property of `window` (browser)
- `examples/05-how-they-work-together.html` - names resolve through both parts of the global scope (browser)
- `examples/06-builtins-on-global-object.js` - `Math` and `setTimeout` without importing anything
- `examples/07-globalthis.js` - a property of `globalThis` works like a global variable
- `examples/08-var-globals-duplicated.html` - a `var` global is a variable and a property of `globalThis` (browser)
- `examples/09-shadowing-alert.html` - a global `var alert` breaks `alert()` (browser)
- `examples/10-implicit-globals.cjs` - in sloppy mode, an undeclared variable becomes a global
- `examples/11-implicit-globals-strict.js` - in strict mode, the same assignment throws a `ReferenceError`
- `examples/12-multiple-scripts.html` - classic scripts on one page share their globals (browser, with `12-file1.js` and `12-file2.js`)
- `examples/13-multiple-files-node.cjs` - in Node every file has its own top-level scope (with `13-file1.cjs` and `13-file2.cjs`)

Run one with `node 11-scope-and-variables/global-variables/examples/06-builtins-on-global-object.js` from the repository folder. The browser examples need `window` and a page where scripts share one global scope: run `npm run serve`, open the page from the address it prints and look at the console. Examples 10 and 13 end in `.cjs`, so Node runs them as plain scripts: example 10 needs sloppy mode, and example 13 loads its files with `require` like the lecture.

## Tasks
1. **The accidental global** (`tasks/01-accidental-global.js`) - fix an item counter that was never declared
2. **The shop currency** (`tasks/02-shop-currency.js`) - read a setting from `globalThis`, with a default

Run the tests with `npm test -- 11-scope-and-variables/global-variables`. They fail until the task is solved. Compare with `solutions/` after you try.
