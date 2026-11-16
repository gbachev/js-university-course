# Async Iterators and for await...of

Code for the lecture *Async Iterators and for await...of* (section 23, Functional and Advanced Techniques) of the JavaScript course at gbachev.com.

The examples use top-level `await`. The repository runs its `.js` files as modules, so they work as they are.

## Examples
- `examples/01-async-iterator-protocol.js` - an inbox with `[Symbol.asyncIterator]()` and a `next()` that returns a promise
- `examples/02-async-generators.js` - an `async function*` that awaits and yields order updates
- `examples/03-paginated-api.js` - a fake paginated API read page by page
- `examples/04-breaking-out-early.js` - a `break` runs `finally` and fetches no further page
- `examples/05-array-of-promises.js` - `for await...of` over an array of promises, and `Promise.all`
- `examples/06-array-from-async.js` - `Array.fromAsync` collects an async generator

Run one with `node 23-functional-and-advanced-techniques/async-iterators/examples/01-async-iterator-protocol.js` from the repository folder.

## Tasks
1. **A message feed by hand** (`tasks/01-message-feed.js`) - an async iterable with a hand-written `next()` that returns promises
2. **Every product, page by page** (`tasks/02-all-products.js`) - an async generator over a fake paginated API
3. **Search until we have enough** (`tasks/03-search-products.js`) - `for await...of` with a `break` that stops requesting pages

Run the tests with `npm test -- 23-functional-and-advanced-techniques/async-iterators`. They fail until the task is solved. Compare with `solutions/` after you try.
