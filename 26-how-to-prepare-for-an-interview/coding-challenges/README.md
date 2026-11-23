# Coding Challenges

Code for the lecture *Coding Challenges* (section 24, How to Prepare for an Interview) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-fibonacci-three-ways.js` - Fibonacci with plain recursion, with memoization and with a loop
- `examples/02-debounce.js` - debounce from scratch: only the last call of a burst runs
- `examples/03-flat-built-in.js` - `flat()` with one level and with `Infinity`
- `examples/04-flatten-by-hand.js` - flattening with recursion and with an explicit stack, and what happens to holes
- `examples/05-structured-clone.js` - what `structuredClone()` copies, and where it stops
- `examples/06-deep-clone-by-hand.js` - a hand-written deep clone for plain objects, arrays and primitives
- `examples/07-once.js` - `once()` runs a function only the first time

Run one with `node 26-how-to-prepare-for-an-interview/coding-challenges/examples/01-fibonacci-three-ways.js` from the repository folder.

## Tasks
1. **The big Fibonacci** (`tasks/01-big-fibonacci.js`) - turn the memoized `fib()` into a loop with `BigInt` that handles `fib(10000)`
2. **Debounce with cancel** (`tasks/02-debounce-with-cancel.js`) - write debounce from memory and add `cancel()`
3. **Flatten to a depth** (`tasks/03-flatten-to-depth.js`) - flatten a nested array to a given depth without `flat()`
4. **A deeper clone** (`tasks/04-deep-clone.js`) - a deep clone that also copies dates and circular references
5. **Fix once()** (`tasks/05-fix-once.js`) - fix a `once()` that forgets its result and overflows the stack when it calls itself

Run the tests with `npm test -- 26-how-to-prepare-for-an-interview/coding-challenges`. They fail until the task is solved. Compare with `solutions/` after you try.
