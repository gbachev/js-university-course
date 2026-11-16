# Transpilers

Code for the lecture *Transpilers* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
Each example is a small project with its own `package.json`. We install its packages inside its folder; the rest of the repository stays without dependencies.

- `examples/01-arrow-functions-to-es5/` - Babel 8 with `@babel/preset-env`, `babel.config.json` and the `build` script. `src/order.js` uses an arrow function for its `this`, and the `browserslist` field targets Internet Explorer 11, so the build in `dist/order.js` is ES5.
- `examples/02-polyfills/` - `babel-plugin-polyfill-corejs3` with `usage-global`. `src/report.js` uses `Object.groupBy`, so the build gets a core-js import.

Run the first one from the repository folder:

```bash
cd 20-tooling/transpilers/examples/01-arrow-functions-to-es5
npm install
npm run build          # Successfully compiled 1 file with Babel
node src/order.js      # Order 42 shipped
node dist/order.js     # Order 42 shipped, from the ES5 version
npx browserslist "defaults"
```

To see the output with the default targets, we delete the `browserslist` field from `package.json` (or run `npm pkg delete browserslist`) and build again: `dist/order.js` then looks like the source.

The second one works the same way: `npm install`, then `npm run build`, and we open `dist/report.js`. With `"browserslist": ["defaults", "not chrome 109"]` in its `package.json`, the import is gone.

`npm install` writes a `package-lock.json` and a `node_modules` folder into the example, and the build a `dist` folder. Git ignores `node_modules` and `dist`; we can delete them when we are done.

## Tasks
1. **Read a .browserslistrc file** (`tasks/01-read-browserslistrc.js`) - turn the text of the file into a list of queries, without comments and empty lines
2. **Do we need a polyfill?** (`tasks/02-needs-polyfill.js`) - check if any of our target browsers is older than the version that added a feature

Run the tests with `npm test -- 20-tooling/transpilers`. They fail until the task is solved. Compare with `solutions/` after you try.
