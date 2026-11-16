# Bundlers

Code for the lecture *Bundlers* (section 20, Tooling) of the JavaScript course at gbachev.com.

## Examples
Each example is the shop of the lecture as a small project with its own `package.json`. We install its packages inside its folder; the rest of the repository stays without dependencies.

- `examples/01-shop-vite/` - the shop built with Vite: `src/main.js` imports `cart.js`, `format.js`, a stylesheet and `date-fns`, and loads `checkout.js` with `import()` on a click. `vite.config.js` turns on hidden source maps.
- `examples/02-shop-webpack/` - the same shop built with webpack: `webpack.config.js` with entry, output, loaders, plugins, mode and `devtool`, plus the `babel.config.json` from *Transpilers*

Run the first one from the repository folder:

```bash
cd 20-tooling/bundlers/examples/01-shop-vite
npm install
npm run build                          # 313 modules, index, checkout chunk and CSS
grep -c "EUR" dist/assets/index-*.js   # 1
grep -c "kg" dist/assets/index-*.js    # 0, formatWeight was tree-shaken
npm run preview                        # open the URL, then the console, and click Checkout
```

The lecture builds without `vite.config.js` first; with it, the build also writes a `.map` file next to each script. The webpack one builds with `npm install`, then `npm run build` (or `npx webpack`), into `dist/`. We open `dist/index.html` through a server, for example `npx serve dist`.

`npm install` writes a `package-lock.json` and a `node_modules` folder into the example, and the build a `dist` folder. Git ignores `node_modules` and `dist`; we can delete them when we are done.

## Tasks
1. **Follow the imports** (`tasks/01-module-graph.js`) - collect every file an entry needs, the way a bundler builds its module graph
2. **Shake the tree** (`tasks/02-tree-shaking.js`) - keep only the exports that some import uses
3. **Split off the checkout** (`tasks/03-code-splitting.js`) - put the files behind each `import()` into chunks of their own

Run the tests with `npm test -- 20-tooling/bundlers`. They fail until the task is solved. Compare with `solutions/` after you try.
