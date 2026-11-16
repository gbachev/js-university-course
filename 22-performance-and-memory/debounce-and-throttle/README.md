# Debounce and Throttle

Code for the lecture *Debounce and Throttle* (section 22, Performance and Memory) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-debounce.js` - the Reading List's `debounce()`, as it is
- `examples/02-autosave.js` - four calls to a debounced autosave, one save
- `examples/03-debounce-leading.js` - a leading-edge debounce for a "Place order" button
- `examples/04-throttle.js` - the smallest throttle, which loses the last position
- `examples/05-throttle-with-trailing-call.js` - a throttle that keeps the last call
- `examples/06-raf-throttle.html` - `requestAnimationFrame()` as a throttle (browser, with `06-raf-throttle.js`)
- `examples/07-debounce-cancel.js` - `cancel()` stops the pending run

Run one with `node 22-performance-and-memory/debounce-and-throttle/examples/02-autosave.js` from the repository folder. Example 1 only exports the function, so it prints nothing; example 2 imports it. Example 6 needs `requestAnimationFrame()`: run `npm run serve`, open the page and look at the console.

## Tasks
1. **Fix the debounce** (`tasks/01-fix-the-debounce.js`) - fix a debounce that runs once per key instead of once per pause
2. **Throttle the scroll** (`tasks/02-throttle-the-scroll.js`) - write a throttle that keeps a steady beat and never loses the last position
3. **Cancel and flush** (`tasks/03-cancel-and-flush.js`) - give a debounced autosave `cancel()` and `flush()`

Run the tests with `npm test -- 22-performance-and-memory/debounce-and-throttle`. The tests use fake timers, so they run at once without waiting. They fail until the task is solved. Compare with `solutions/` after you try.
