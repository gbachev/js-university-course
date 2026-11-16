# Best Practices

Code for the lecture *Best Practices* (section 12, Modules) of the JavaScript course at gbachev.com.

## Examples
Each example is a folder of modules. We run its `main.js` (or `main.cjs`).

- `examples/01-prefer-named-exports/` - a named export keeps one name everywhere
- `examples/02-side-effects-in-imports/` - importing analytics.js sends a page view before main.js starts
- `examples/03-no-side-effects-in-imports/` - the work moves into a function the entry file calls
- `examples/04-full-import-paths/` - the import path with its `.js` extension
- `examples/05-state-through-exported-functions/` - only the module that owns the stock changes it
- `examples/06-commonjs-with-module-exports/` - a `.cjs` file that assigns to `module.exports`
- `examples/07-catch-a-failed-load/` - `import()` with a `.catch()` for a missing module
- `examples/08-import-path-from-a-list/` - only a language from our list reaches the import path

Run one with `node 12-modules/best-practices/examples/01-prefer-named-exports/main.js` from the repository folder.
