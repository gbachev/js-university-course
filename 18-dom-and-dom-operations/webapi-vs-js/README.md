# Web APIs vs JavaScript

Code for the lecture *Web APIs vs JavaScript* (section 18, DOM and DOM Operations) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-cart-total.js` - pure ECMAScript runs the same in every engine
- `examples/02-global-object-node.js` - in Node.js the global object is `global`, and there is no `window`
- `examples/02-global-object-browser.html` - in a browser it is `window`, and there is no `global` (browser)
- `examples/03-feature-detection.js` - check with `typeof` that `document` exists before we touch it (also runs in the browser through `03-feature-detection.html`)
- `examples/04-in-global-this.js` - the `in` operator on `globalThis` tells us if a global exists
- `examples/05-thin-browser-layer.js` - keep the math in a plain function and touch the DOM in a thin layer

Run one with `node 18-dom-and-dom-operations/webapi-vs-js/examples/01-cart-total.js` from the repository folder. For the browser pages, run `npm run serve` and open the page from the address it prints. Example 4 prints different answers in the two hosts: we run it in Node.js and then paste it into the browser console.

## Tasks
1. **Where does the total go?** (`tasks/01-show-the-total.js`) - fix a function that breaks in Node.js because it always writes to `document`
2. **A plain total** (`tasks/02-plain-total.js`) - move the math of a cart total out of the browser layer into a plain function
3. **Which globals are missing?** (`tasks/03-missing-globals.js`) - list the APIs our code needs that the host does not have

Run the tests with `npm test -- 18-dom-and-dom-operations/webapi-vs-js`. They fail until the task is solved. Compare with `solutions/` after you try.
