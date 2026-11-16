# Dev Tools (Features, Debugging, Breakpoints)

Code for the lecture *Dev Tools (Features, Debugging, Breakpoints)* (section 16, Error Handling and Debugging) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-cart-bug.html` with `examples/01-cart.js` - the cart that totals 1540 instead of 55, to hunt with breakpoints, watch expressions, conditional breakpoints and logpoints
- `examples/02-debugger-statement.html` with `examples/02-debugger.js` - a `debugger` statement that pauses only for a price that is not a number
- `examples/03-the-fix.js` - `Number()` fixes the total
- `examples/04-pause-on-exceptions.html` with `examples/04-off-by-one.js` - a loop that runs one step too far and throws, for *Pause on uncaught exceptions*

The pages are meant for DevTools: we start `npm run serve` from the repository folder, open a page from the list it prints and open DevTools. `node 16-error-handling-and-debugging/dev-tools/examples/03-the-fix.js` runs the fix in Node.

## Tasks
1. **Shipping from a form** (`tasks/01-shipping-from-a-form.js`) - find why a shipping price from a form breaks an order total, and fix it
2. **One step too far** (`tasks/02-one-step-too-far.js`) - find the line that throws in an average rating, and fix it

Each task also has a page, `tasks/01-shipping-from-a-form.html` and `tasks/02-one-step-too-far.html`, that runs our code with one sample call, so we can debug it in DevTools as in the lecture: we start `npm run serve` and open the page.

Run the tests with `npm test -- 16-error-handling-and-debugging/dev-tools`. They fail until the task is solved. Compare with `solutions/` after you try.
