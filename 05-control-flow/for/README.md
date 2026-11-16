# The for Loop

Code for the lecture *The for Loop* (section 5, Control Flow) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-count-to-five.js` - a first `for` loop from 0 to 4
- `examples/02-looping-backwards.js` - counting down from 10
- `examples/03-loop-step.js` - a step of 2
- `examples/04-multiple-control-variables.js` - two control variables and a combined condition
- `examples/05-nested-loops.js` - a loop inside a loop over a matrix
- `examples/06-break.js` - `break` stops the loop
- `examples/07-continue.js` - `continue` skips one iteration
- `examples/08-infinite-loops.js` - three infinite loops, each stopped by a guard we added
- `examples/09-simple-vs-complex.js` - a simple loop next to a hard-to-read one
- `examples/10-let-vs-var.js` - why `let` is safer than `var` in a loop
- `examples/11-out-of-bounds.js` - `<=` instead of `<` reads past the end of the array

Run one with `node 05-control-flow/for/examples/01-count-to-five.js` from the repository folder.

## Tasks
1. **Cart total** (`tasks/01-cart-total.js`) - add up the prices in a cart with a `for` loop
2. **First sold-out product** (`tasks/02-first-sold-out.js`) - find the first product with no stock and stop with `break`
3. **Free seats** (`tasks/03-free-seats.js`) - fix the nested loops that count too many free seats

Run the tests with `npm test -- 05-control-flow/for`. They fail until the task is solved. Compare with `solutions/` after you try.
