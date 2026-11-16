# Node and NVM

Code for the lecture *Node and NVM* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
Each example is a folder with the files of the lecture. The ES module examples have their own `package.json` with `"type": "module"`, as in the lecture.

- `examples/01-pin-the-version/` - the shop API's `.nvmrc` (24) and the `engines` field of its `package.json` (`>=24`)
- `examples/02-es-modules/` - `prices.js` exports `addVat`, `app.js` imports it
- `examples/03-commonjs/` - the same pair in CommonJS, with `module.exports` and `require()`
- `examples/04-missing-extension/` - an import without `.js` fails with `ERR_MODULE_NOT_FOUND`
- `examples/05-import-meta/` - `import.meta.url`, `import.meta.filename` and `import.meta.dirname` instead of `__dirname`
- `examples/06-require-an-es-module/` - `report.cjs` requires the ES module `prices.js` (Node 22.12 or newer)

Run one with `node 20-tooling/node-and-nvm/examples/02-es-modules/app.js` from the repository folder.

The first example needs nvm. Inside its folder, `nvm use` reads `.nvmrc`, and on a Node older than 24, `npm install` prints the `EBADENGINE` warning and installs anyway:

```bash
cd 20-tooling/node-and-nvm/examples/01-pin-the-version
nvm use        # Found '.../.nvmrc' with version <24>
npm install    # npm WARN EBADENGINE Unsupported engine (on Node 22)
```

## Tasks
1. **CommonJS or ES module?** (`tasks/01-module-system.js`) - decide how Node runs a file from its extension and the `type` field
2. **Is this Node supported?** (`tasks/02-supported-engine.js`) - check a Node version against an `engines` range like `>=22.12`
3. **What nvm use picks** (`tasks/03-nvm-use.js`) - find the newest installed version that matches `.nvmrc`

Run the tests with `npm test -- 20-tooling/node-and-nvm`. They fail until the task is solved. Compare with `solutions/` after you try.
