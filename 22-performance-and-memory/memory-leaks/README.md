# Memory Leaks

Code for the lecture *Memory Leaks* (section 22, Performance and Memory) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-forgotten-timers.js` - an interval nobody can stop, and the fix that hands back `stop()`
- `examples/02-listeners-never-removed.html` - a listener on `window` removed with one `abort()` (browser, with `02-listeners-never-removed.js`)
- `examples/03-detached-dom-nodes.html` - a removed element stays in memory while an array holds it (browser, with `03-detached-dom-nodes.js`)
- `examples/04-closures-holding-large-data.js` - a closure that keeps two numbers instead of the whole array
- `examples/05-accidental-globals.cjs` - an undeclared name becomes a global in sloppy mode
- `examples/06-unbounded-cache.js` - a search cache with a size limit
- `examples/07-heap-used-in-node.js` - watching a leak grow with `process.memoryUsage()` (needs `--expose-gc`)

Run one with `node 22-performance-and-memory/memory-leaks/examples/01-forgotten-timers.js` from the repository folder. Example 5 ends in `.cjs`, so Node runs it as a plain script in sloppy mode, where the leak can happen. Example 7 needs the debugging flag: `node --expose-gc 22-performance-and-memory/memory-leaks/examples/07-heap-used-in-node.js`, and its number varies by machine. The browser examples need the DOM: run `npm run serve`, open the page from the address it prints and look at the console.

## Tasks
1. **Stop the stock watch** (`tasks/01-stop-the-stock-watch.js`) - fix a `stop()` that leaves the interval running
2. **Unmount the chart** (`tasks/02-unmount-the-chart.js`) - fix an unmount that removes the chart but leaves its resize listener behind
3. **A search cache with a limit** (`tasks/03-search-cache-with-a-limit.js`) - cache search results and drop the query used longest ago when the cache is full

Run the tests with `npm test -- 22-performance-and-memory/memory-leaks`. They fail until the task is solved. Compare with `solutions/` after you try.
