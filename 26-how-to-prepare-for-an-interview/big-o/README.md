# Big O Notation

Code for the lecture *Big O Notation* (section 24, How to Prepare for an Interview) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-constant-and-linear.js` - `O(1)` reads by index and from a `Map`, `O(n)` loops and `includes()`
- `examples/02-binary-search.js` - binary search on sorted ids, `O(log n)`
- `examples/03-sort-and-hidden-loop.js` - `sort()` is `O(n log n)`, and `includes()` inside `filter()` is a hidden nested loop
- `examples/04-shift-and-pop-timing.js` - times emptying arrays of two sizes with `shift()` and with `pop()`
- `examples/05-find-pair-slow.js` - the gift card pair with two nested loops, `O(n²)`
- `examples/06-find-pair.js` - the same pair with a `Set`, `O(n)`
- `examples/07-find-pair-timing.js` - times both pair versions when the list grows ten times

The timing scripts print the times of our own machine, and they change from run to run: we compare how they grow, not the numbers.

Run one with `node 26-how-to-prepare-for-an-interview/big-o/examples/01-constant-and-linear.js` from the repository folder.

## Tasks
1. **Repeated titles** (`tasks/01-repeated-titles.js`) - make an `O(n²)` search for repeated titles `O(n)` with a `Set`
2. **Count the pairs** (`tasks/02-count-pairs.js`) - count every pair of prices that spends a gift card, in `O(n)` with a `Map`
3. **In both lists** (`tasks/03-in-both-lists.js`) - make the wishlist filter `O(n + m)` with a `Set`

Each starter already gives the right results, slowly. The tests check the results and the edge cases, and time one long list, so they fail until our version is fast and still gives the same answers.

Run the tests with `npm test -- 26-how-to-prepare-for-an-interview/big-o`. They fail until the task is solved. Compare with `solutions/` after you try.
