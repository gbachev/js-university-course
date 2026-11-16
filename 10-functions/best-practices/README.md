# Best Practices

Code for the lecture *Best Practices* (section 10, Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-const-for-function-expressions.js` - `const` for a function in a variable, so it cannot be reassigned
- `examples/02-clear-names.js` - a name that says what the function does
- `examples/03-small-focused-functions.js` - a registration split into small functions that do one thing each
- `examples/04-avoid-side-effects.js` - a function with a side effect next to a pure function
- `examples/05-options-object.js` - one object instead of many parameters
- `examples/06-default-parameters.js` - a default parameter instead of a check for `undefined`
- `examples/07-arrow-callbacks.js` - a short arrow function as a `map()` callback
- `examples/08-methods-not-arrows.js` - an arrow function as a method, and the regular method that works
- `examples/09-consistent-return.js` - every code path returns a value
- `examples/10-guard-clauses.js` - a guard clause instead of nested `if` statements

Run one with `node 10-functions/best-practices/examples/01-const-for-function-expressions.js` from the repository folder.
