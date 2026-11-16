# Closures

Code for the lecture *Closures* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-counter.js` - an inner function keeps its `counter` after `outer()` has returned
- `examples/02-closures-in-loops-var.js` - timers in a `var` loop all print `3`
- `examples/03-closures-in-loops-let-and-helper.js` - a `let` loop, or a helper function, gives every timer its own value
- `examples/04-logger.js` - loggers that remember their prefix, called directly, from `forEach()` and from a timer
- `examples/05-data-privacy.js` - a counter whose `count` only its methods can reach
- `examples/06-factory-functions.js` - `multiply()` makes functions that remember their `by`
- `examples/07-shared-variables.js` - two closures from one call share one variable
- `examples/08-closures-and-memory.js` - a closure keeps a big array in memory until we drop it

Run one with `node 11-scope-and-variables/closures/examples/01-counter.js` from the repository folder.

## Tasks
1. **The cart counter** (`tasks/01-cart-counter.js`) - a counter with `add()`, `remove()` and `count()` and a private number
2. **The discount factory** (`tasks/02-discount-factory.js`) - a function that makes discount functions
3. **Pay only once** (`tasks/03-pay-once.js`) - a helper that runs a function only on its first call

Run the tests with `npm test -- 11-scope-and-variables/closures`. They fail until the task is solved. Compare with `solutions/` after you try.
