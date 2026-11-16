# ES Modules

Code for the lecture *ES Modules* (section 12, Modules) of the JavaScript course at gbachev.com.

## Examples
Each example is a folder of modules that import each other. We run its `main.js`.

- `examples/01-named-exports/` - named exports, a private `round()`, and renaming with `as`
- `examples/02-default-export/` - a default export, imported under a name of our choice
- `examples/03-namespace-and-reexports/` - `import * as shop` and a `shop.js` entry point that re-exports
- `examples/04-live-bindings/` - an import follows the exported variable, and assigning to it throws
- `examples/05-module-scope.js` - module scope and strict mode: no globals, `this` is `undefined`
- `examples/06-module-runs-once/` - config.js is imported twice but runs once, before the rest
- `examples/07-modules-in-the-browser/` - a page with two module scripts (browser)
- `examples/08-import-meta-and-top-level-await/` - `import.meta.url` and top-level `await` read a VERSION file

Run one with `node 12-modules/es-modules/examples/01-named-exports/main.js` from the repository folder. The repository's package.json has `"type": "module"`, so Node treats every `.js` file as an ES module.

For the browser example, we start `npm run serve` and open `12-modules/es-modules/examples/07-modules-in-the-browser/index.html` from the address it prints, then look at the console.

## Tasks
1. **Split the shop file** (`tasks/01-split-the-shop.js`) - move the price and cart code into two modules and re-export them from one entry file
2. **Default or named?** (`tasks/02-default-or-named.js`) - fix the imports of a cart summary that mix up the default and the named export
3. **A stock counter that stays current** (`tasks/03-stock-counter.js`) - export the stock as a live binding that only its module can change

Run the tests with `npm test -- 12-modules/es-modules`. They fail until the task is solved. Compare with `solutions/` after you try.
