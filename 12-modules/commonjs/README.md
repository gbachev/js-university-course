# CommonJS

Code for the lecture *CommonJS* (section 12, Modules) of the JavaScript course at gbachev.com.

## Examples
Each example is a folder of modules that require each other. We run its `main.cjs` (or the file named below). The files end in `.cjs` because the repository's package.json has `"type": "module"`, and Node always treats a `.cjs` file as CommonJS.

- `examples/01-require-and-module-exports/` - `require()` returns whatever we assign to `module.exports`
- `examples/02-module-exports-vs-exports/` - adding to `exports` works, assigning to it exports nothing
- `examples/03-require-is-synchronous/` - `require()` inside an `if` picks a locale file
- `examples/04-module-runs-once/` - the second `require()` returns the cached module
- `examples/05-copies-not-live-bindings/` - an exported number is a copy, `getStock()` reads the current value
- `examples/06-dirname-and-filename/` - `__dirname` finds the VERSION file next to the module
- `examples/07-no-dirname-in-esm.js` - `__dirname` does not exist in an ES module
- `examples/08-import-commonjs-from-esm/` - `main.mjs` imports two CommonJS files, default and named

Run one with `node 12-modules/commonjs/examples/01-require-and-module-exports/main.cjs` from the repository folder.

## Tasks
1. **Coupons that export nothing** (`tasks/01-coupons.cjs`) - fix a CommonJS module that assigns to `exports`
2. **Finish the migration** (`tasks/02-finish-the-migration.js`) - replace the last `require()` calls of an ES module with `import`

Requiring an ES module from CommonJS comes later, in *Node.js and nvm* (`20-tooling/node-and-nvm`).

Run the tests with `npm test -- 12-modules/commonjs`. They fail until the task is solved. Compare with `solutions/` after you try.
