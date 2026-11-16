# Scope and the Scope Chain

Code for the lecture *Scope and the Scope Chain* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-block-vs-function-scope.js` - `var` leaves a block, `let` and `const` stay in it
- `examples/02-new-scope-on-every-call.js` - every call gets its own parameters and local variables
- `examples/03-parameters-are-local.js` - a parameter is not visible outside its function
- `examples/04-scope-chain.js` - inner functions reach outer variables, not the other way around
- `examples/05-lookup-stops-at-first-match.js` - the lookup stops at the first variable with that name
- `examples/06-shadowing.js` - an inner variable hides an outer one with the same name
- `examples/07-changing-an-outer-variable.js` - without a new declaration we change the outer variable
- `examples/08-accidental-global.cjs` - an undeclared variable leaks to the global scope in sloppy mode

Run one with `node 11-scope-and-variables/scope-and-scope-chain/examples/01-block-vs-function-scope.js` from the repository folder. Example 8 ends in `.cjs`, so Node runs it as a plain script in sloppy mode, like the code in the lecture: in a module, which runs in strict mode, the assignment throws a `ReferenceError` instead.

## Tasks
1. **The price label** (`tasks/01-price-label.js`) - fix a function that expects to see a variable of the function that calls it
2. **The visit counter** (`tasks/02-visit-counter.js`) - fix a counter whose local variable shadows the outer one
3. **The bigger discount** (`tasks/03-bigger-discount.js`) - fix a bigger discount that is lost in a shadowing variable

Run the tests with `npm test -- 11-scope-and-variables/scope-and-scope-chain`. They fail until the task is solved. Compare with `solutions/` after you try.
