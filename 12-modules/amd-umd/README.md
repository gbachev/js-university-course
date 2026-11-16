# AMD and UMD

Code for the lecture *AMD and UMD* (section 12, Modules) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-amd/` - the small shop in AMD: `js/prices.js`, `js/cart.js`, `js/main.js` and the `index.html` that loads RequireJS
- `examples/02-umd/prices.umd.js` - the UMD wrapper, used from Node (`main.cjs`) and from a plain script tag (`index.html`)

The UMD file works in Node and in a page without anything else. Run it in Node with `node 12-modules/amd-umd/examples/02-umd/main.cjs` from the repository folder. For the page, we start `npm run serve`, open `12-modules/amd-umd/examples/02-umd/index.html` from the address it prints and look at the console.

The folder `02-umd` has its own small package.json with `"type": "commonjs"`. The repository's package.json says `"type": "module"`, and without the small one Node would load `prices.umd.js` as an ES module, where there is no `module` and the top-level `this` is `undefined`.

The AMD files need an AMD loader, and this repository installs nothing. To try them, we download `require.js` from [requirejs.org](https://requirejs.org/docs/download.html) into `examples/01-amd/js/`, start `npm run serve` and open `12-modules/amd-umd/examples/01-amd/index.html`, which has the line from the lecture, `<script src="js/require.js" data-main="js/main"></script>`. Without require.js the page shows only a 404 for it in the console. The console shows `€12.50`. Copied into the same `js/` folder, the UMD file loads as an AMD module too, with `require(['prices.umd'], ...)` as in the lecture.

## Tasks
1. **Which module format?** (`tasks/01-which-format.js`) - tell from the code of a file if it is UMD, AMD, CommonJS or an ES module
2. **Finish the UMD wrapper** (`tasks/02-shipping-umd.cjs`) - add the CommonJS case to a UMD wrapper and write its two shipping functions

Run the tests with `npm test -- 12-modules/amd-umd`. They fail until the task is solved. Compare with `solutions/` after you try. The tests of task 2 load the file three ways: with `require()`, with a stand-in AMD `define()`, and as a plain script that sets a global.
