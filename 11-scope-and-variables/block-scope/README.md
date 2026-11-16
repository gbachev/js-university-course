# Block Scope

Code for the lecture *Block Scope* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-what-is-a-block.js` - `let` and `const` live only inside their block
- `examples/02-if-block.js` - the block of an `if` is a scope too
- `examples/03-block-vs-function-scope.js` - `var` leaves the `if` block, `let` does not
- `examples/04-tdz-inside-blocks.js` - the temporal dead zone in a block and in a nested block
- `examples/05-block-function-sloppy.cjs` - in sloppy mode, a function declared in a block is visible after it
- `examples/06-block-function-strict.js` - in strict mode, it stays in the block
- `examples/07-block-scope-in-loops.js` - `setTimeout` in a `let` loop and in a `var` loop
- `examples/08-try-catch.js` - the error variable of `catch` exists only in its block
- `examples/09-switch.js` - all cases of a `switch` share one block, unless we give each case its own
- `examples/10-shadowing.js` - a `let` in a block hides the outer variable without changing it
- `examples/11-standalone-block.js` - a standalone block for a temporary variable

Run one with `node 11-scope-and-variables/block-scope/examples/01-what-is-a-block.js` from the repository folder. Example 5 ends in `.cjs`, so Node runs it as a plain script in sloppy mode, which is the case the lecture compares with strict mode.

## Tasks
1. **The reminders** (`tasks/01-reminders.js`) - fix timers set in a `var` loop that all see the same `i`
2. **The delivery message** (`tasks/02-delivery-message.js`) - fix a `switch` whose cases share one `let`

Run the tests with `npm test -- 11-scope-and-variables/block-scope`. They fail until the task is solved. Compare with `solutions/` after you try.
