# Measuring Performance

Code for the lecture *Measuring Performance* (section 22, Performance and Memory) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-performance-now.js` - `performance.now()` against `Date.now()`, and timing a loop
- `examples/02-guess-then-measure.js` - `console.time()` shows the duplicate check is slower than the sort
- `examples/03-marks-and-measures.js` - `performance.mark()`, `performance.measure()` and reading the entries back

Run one with `node 22-performance-and-memory/measuring-performance/examples/01-performance-now.js` from the repository folder. Times differ by machine and by run, so the numbers in the comments are only what we measured once: compare orders of magnitude, not decimals. The snippets that time the Reading List run in the DevTools Console of the app from section 21, so they are not here.

## Tasks
1. **Time a step** (`tasks/01-time-a-step.js`) - wrap a step in a mark and a measure and give back its result
2. **The slowest measure** (`tasks/02-slowest-measure.js`) - find the longest measure in a list of performance entries
3. **Many clicks, one summary** (`tasks/03-summarize-measures.js`) - count, add up and average the measures of each name

Run the tests with `npm test -- 22-performance-and-memory/measuring-performance`. They fail until the task is solved. Compare with `solutions/` after you try.
