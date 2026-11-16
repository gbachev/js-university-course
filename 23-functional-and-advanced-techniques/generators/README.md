# Generators: function* and yield

Code for the lecture *Generators (function\*)* (section 23, Functional and Advanced Techniques) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-function-star-and-yield.js` - a generator pauses at every `yield`
- `examples/02-iterators-and-iterables.js` - generator objects in `for...of`, spread and destructuring, once
- `examples/03-bookshelf-generator.js` - `[Symbol.iterator]` written as a generator method
- `examples/04-infinite-sequences.js` - endless order ids and Fibonacci numbers with `take()`
- `examples/05-return-value.js` - a returned value arrives with `done: true`
- `examples/06-sending-values-in.js` - `next(value)` sends a price into a running total
- `examples/07-return-throw-finally.js` - `finally` closes the file on `break`, `return()` and `throw()`
- `examples/08-yield-star-menu.js` - `yield*` walks a nested menu

Run one with `node 23-functional-and-advanced-techniques/generators/examples/01-function-star-and-yield.js` from the repository folder.

## Tasks
1. **Endless invoice numbers** (`tasks/01-invoice-numbers.js`) - a generator for a sequence that never ends
2. **Take only what we need** (`tasks/02-take.js`) - a `take()` generator that reads no more than it hands out
3. **Every file in a project** (`tasks/03-walk-folders.js`) - a recursive generator with `yield*` over nested folders

Run the tests with `npm test -- 23-functional-and-advanced-techniques/generators`. They fail until the task is solved. Compare with `solutions/` after you try.
