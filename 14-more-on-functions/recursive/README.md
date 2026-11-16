# Recursive Functions

Code for the lecture *Recursive Functions* (section 14, More on Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-countdown.js` - a base case and a recursive case
- `examples/02-factorial.js` - each call builds its result from the call below it
- `examples/03-stack-overflow.js` - a base case that is skipped ends in a `RangeError`
- `examples/04-stack-depth.js` - counting how deep the call stack goes
- `examples/05-print-menu.js` - printing a nested shop menu, one level per call
- `examples/06-find-path.js` - breadcrumbs: the path to a menu item, built on the way back up
- `examples/07-factorial-loop.js` - the same factorial with a loop

Run one with `node 14-more-on-functions/recursive/examples/01-countdown.js` from the repository folder.

## Tasks
1. **The launch countdown** (`tasks/01-launch-countdown.js`) - fix a base case that negative and decimal numbers skip
2. **The bundle total** (`tasks/02-bundle-total.js`) - add up a cart where bundles hold products and more bundles
3. **Category paths** (`tasks/03-category-paths.js`) - turn nested categories into a flat list of paths

Run the tests with `npm test -- 14-more-on-functions/recursive`. They fail until the task is solved. Compare with `solutions/` after you try.
