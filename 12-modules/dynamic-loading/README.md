# Dynamic Loading

Code for the lecture *Dynamic Loading* (section 12, Modules) of the JavaScript course at gbachev.com.

## Examples
Each example is a folder of modules. We run its `main.js`.

- `examples/01-import-returns-a-promise/` - `import()` returns a promise, and main.js goes on without waiting
- `examples/02-top-level-await/` - `await import()` with destructuring that renames `default`
- `examples/03-conditional-loading/` - `import()` with a path built from a language checked against a list
- `examples/04-loading-on-a-click/` - the hands-on companion to the lecture's pointer to *Lazy Loading*: a page that loads size-guide.js on the first click (browser)
- `examples/05-failed-load/` - `.catch()` when the module file is missing
- `examples/06-import-meta/` - `import.meta.url`, `import.meta.resolve()`, `filename` and `dirname`

Run one with `node 12-modules/dynamic-loading/examples/01-import-returns-a-promise/main.js` from the repository folder.

For the browser example, we start `npm run serve`, open `12-modules/dynamic-loading/examples/04-loading-on-a-click/index.html` from the address it prints and click the button with the console and the Network panel open.

## Tasks
1. **Load the size guide on demand** (`tasks/01-size-guide-on-demand.js`) - turn a static import into `import()`, so the module loads on the first call
2. **Texts from a list** (`tasks/02-load-texts.js`) - check the language against a list before it becomes part of an import path
3. **A feature or a fallback** (`tasks/03-load-feature.js`) - give a fallback when a module is missing or throws while it runs

Run the tests with `npm test -- 12-modules/dynamic-loading`. They fail until the task is solved. Compare with `solutions/` after you try.
