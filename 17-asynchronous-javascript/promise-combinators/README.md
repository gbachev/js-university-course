# Promise Combinators

Code for the lecture *Promise Combinators* (section 17, Asynchronous JavaScript) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-promise-all.js` - three requests at once with `Promise.all()`
- `examples/02-all-or-nothing.js` - one rejection rejects the whole `Promise.all()`
- `examples/03-promise-all-settled.js` - a newsletter report with `Promise.allSettled()`
- `examples/04-promise-any.js` - the first mirror that answers with `Promise.any()`, and `AggregateError`
- `examples/05-promise-race-timeout.js` - a timeout with `Promise.race()`
- `examples/06-with-resolvers.js` - `Promise.withResolvers()` for a payment confirmed from elsewhere

Run one with `node 17-asynchronous-javascript/promise-combinators/examples/01-promise-all.js` from the repository folder.

## Tasks
1. **The product page at once** (`tasks/01-product-page.js`) - load three independent pieces with `Promise.all()` instead of one by one
2. **The newsletter report** (`tasks/02-newsletter-report.js`) - send every email with `Promise.allSettled()` and report what failed
3. **The cached fallback** (`tasks/03-cached-fallback.js`) - use cached options when the live ones are too slow, with `Promise.race()`

Run the tests with `npm test -- 17-asynchronous-javascript/promise-combinators`. They fail until the task is solved. Compare with `solutions/` after you try.
