# The while and do...while Loops

Code for the lecture *The while and do...while Loops* (section 5, Control Flow) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-while.js` - a `while` loop from 0 to 4
- `examples/02-do-while.js` - `do...while` runs once even when the condition is false
- `examples/03-input-validation.html` - `do...while` asks with `prompt` until the number is valid (browser)
- `examples/04-sum-to-100.js` - the sum of the numbers from 1 to 100 with `while`

Run one with `node 05-control-flow/while-do-while/examples/01-while.js` from the repository folder. The input validation example uses `prompt`, which only the browser has: run `npm run serve`, open `05-control-flow/while-do-while/examples/03-input-validation.html` from the address it prints and follow the line on the page.

## Tasks
1. **Double the savings** (`tasks/01-double-the-savings.js`) - count the years until our savings double with `while`
2. **Retry delays** (`tasks/02-retry-delays.js`) - build doubling retry waits with `do...while`, always at least one
3. **Days to finish a book** (`tasks/03-days-to-finish-a-book.js`) - fix the loop condition that forgets the last day

Run the tests with `npm test -- 05-control-flow/while-do-while`. They fail until the task is solved. Compare with `solutions/` after you try.
