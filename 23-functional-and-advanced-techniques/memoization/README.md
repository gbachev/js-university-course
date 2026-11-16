# Memoization

Code for the lecture *Memoization* (section 23, Functional and Advanced Techniques) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-memoize.js` - a `memoize()` helper with a `Map` in its closure
- `examples/02-several-arguments.js` - one key for several arguments with `JSON.stringify()`
- `examples/03-key-limits.js` - where JSON and joined keys go wrong
- `examples/04-weakmap.js` - a `WeakMap` cache with the cart object as the key
- `examples/05-pure-only.js` - what goes wrong when we memoize an impure function
- `examples/06-limit.js` - a cache with a size limit that drops the oldest key
- `examples/07-fibonacci.js` - a memoized Fibonacci, from 2.7 million calls down to 31
- `examples/08-does-it-pay-off.js` - measuring when memoization pays off (timings vary)

Run one with `node 23-functional-and-advanced-techniques/memoization/examples/01-memoize.js` from the repository folder.

## Tasks
1. **Remember the shipping quote** (`tasks/01-memoize.js`) - a `memoize()` with a `Map` that also remembers `0` and `undefined`
2. **One total per cart** (`tasks/02-memoize-by-cart.js`) - a `WeakMap` cache for object arguments, and a cart total built with it
3. **A search cache with a limit** (`tasks/03-memoize-with-limit.js`) - a size limit that drops the least recently used entry

Run the tests with `npm test -- 23-functional-and-advanced-techniques/memoization`. They fail until the task is solved. Compare with `solutions/` after you try.
