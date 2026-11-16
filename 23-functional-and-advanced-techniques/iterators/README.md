# Iterators

Code for the lecture *Iterators* (section 23, Functional and Advanced Techniques) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-calling-next-by-hand.js` - the iteration protocol, called by hand on an array
- `examples/02-built-in-iterables.js` - strings, a `Map`, and a plain object that is not iterable
- `examples/03-who-uses-the-protocol.js` - destructuring, `Array.from`, spread and `Set` accept any iterable
- `examples/04-iterable-bookshelf.js` - a `Bookshelf` class with its own `[Symbol.iterator]()`
- `examples/05-iterable-iterator.js` - a `Countdown` that is its own iterator and gets used up
- `examples/06-return-cleanup.js` - `return()` closes the queue when we stop early
- `examples/07-iterator-helpers.js` - lazy iterator helpers on an endless sequence

Run one with `node 23-functional-and-advanced-techniques/iterators/examples/01-calling-next-by-hand.js` from the repository folder.

## Tasks
1. **A playlist we can loop over** (`tasks/01-playlist.js`) - make a class iterable with `Symbol.iterator` and a hand-written `next()`
2. **The first few in stock** (`tasks/02-first-matches.js`) - the first matches of a long list with lazy iterator helpers
3. **A job queue that closes** (`tasks/03-job-queue.js`) - an iterable iterator with a `return()` that runs when we stop early

Run the tests with `npm test -- 23-functional-and-advanced-techniques/iterators`. They fail until the task is solved. Compare with `solutions/` after you try.
