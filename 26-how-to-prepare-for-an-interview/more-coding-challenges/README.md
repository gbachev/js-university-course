# More Coding Challenges

Code for the lecture *More Coding Challenges* (section 24, How to Prepare for an Interview) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-promise-all.js` - our own `Promise.all()`: input order, the first rejection wins, plain values and an empty array
- `examples/02-emitter.js` - a tiny event emitter with `on`, `off` and `emit`, and an unsubscribe function
- `examples/03-deep-equal.js` - deep equality for plain objects, arrays and primitives
- `examples/04-top-words.js` - the k most frequent words, counted with a `Map`
- `examples/05-map-group-by.js` - grouping orders by status with `Map.groupBy()`
- `examples/06-lru-cache.js` - an LRU cache on a `Map`, with `O(1)` `get()` and `set()`
- `examples/07-throttle.js` - throttle from memory: at most one call every `wait` milliseconds

Run one with `node 24-how-to-prepare-for-an-interview/more-coding-challenges/examples/01-promise-all.js` from the repository folder.

## Tasks
1. **Group by** (`tasks/01-group-by.js`) - group books by a key into a plain object, without `Object.groupBy()` or `Map.groupBy()`
2. **Our own allSettled** (`tasks/02-promise-all-settled.js`) - write `Promise.allSettled()` by hand: every result in input order, and it never rejects
3. **An LRU cache that reports what it drops** (`tasks/03-lru-cache-on-evict.js`) - write the LRU cache again and call `onEvict(key, value)` for every entry it drops

The lecture does not solve these versions, so we meet them fresh, as in an interview.

Run the tests with `npm test -- 24-how-to-prepare-for-an-interview/more-coding-challenges`. They fail until the task is solved. Compare with `solutions/` after you try.
