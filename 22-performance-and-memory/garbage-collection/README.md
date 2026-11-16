# Garbage Collection

Code for the lecture *Garbage Collection* (section 22, Performance and Memory) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-two-paths-to-an-object.js` - an object stays alive while another variable still reaches it
- `examples/02-closure-keeps-data.js` - a reachable function keeps the variables of its scope alive
- `examples/03-cycle.js` - mark-and-sweep frees a cycle once no root reaches it (needs `--expose-gc`)
- `examples/04-weakmap-view-counts.js` - a `WeakMap` keeps view counts without keeping the products alive

Run one with `node 22-performance-and-memory/garbage-collection/examples/01-two-paths-to-an-object.js` from the repository folder. Example 3 forces collections, so it needs the debugging flag: `node --expose-gc 22-performance-and-memory/garbage-collection/examples/03-cycle.js`. Its numbers vary between machines and Node versions.

## Tasks
1. **Reachable from the roots** (`tasks/01-reachable-from-the-roots.js`) - play the mark phase on a small heap, cycles included
2. **Why reference counting fails** (`tasks/02-reference-counting.js`) - count the references to every value and see a cycle keep its counts above zero
3. **A price cache that lets products go** (`tasks/03-price-cache.js`) - calculate each product's price once and keep it in a `WeakMap`

Run the tests with `npm test -- 22-performance-and-memory/garbage-collection`. They fail until the task is solved. Compare with `solutions/` after you try.
