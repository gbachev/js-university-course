# Custom Events and EventTarget

Code for the lecture *Custom Events and EventTarget* (section 19, Events) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-new-event-and-dispatch.html` - `dispatchEvent()` runs the listeners inside the call
- `examples/02-custom-event-detail.html` - passing data in `detail`
- `examples/03-bubbles-option.html` - our events bubble only with `bubbles: true`
- `examples/04-cancelable-veto.html` - a listener vetoes a removal with `preventDefault()` and `cancelable: true`
- `examples/05-store.js` - a store that extends `EventTarget` and tells its listeners about changes

The examples run in the browser. Run `npm run serve` from the repository folder, open a page from the address it prints and look at the console. Each page loads its code from the `.js` file with the same name, with `defer`. Example 5 runs in Node: `node 19-events/custom-events/examples/05-store.js` from the repository folder.

## Tasks
1. **The cart tells everyone** (`tasks/01-cart-updated.js`) - a cart that extends `EventTarget` dispatches its items and total
2. **Ask before removing** (`tasks/02-ask-before-removing.js`) - a cancelable `cart:remove` event lets a listener keep an item
3. **Tell the page about the rating** (`tasks/03-book-rated.js`) - make a widget's custom event bubble up to the list

Tasks 1 and 2 run in Node: run the tests with `npm test -- 19-events/custom-events`. They fail until the task is solved. Task 3 runs in the browser: run `npm run serve`, open `tasks/03-book-rated.html` and read the checks at the bottom of it. Compare with `solutions/` after you try, or add `?solutions` to the address to run the checks against the solution.
