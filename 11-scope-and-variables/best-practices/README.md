# Best Practices

Code for the lecture *Best Practices* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-strict-mode.cjs` - with `'use strict'`, a typo in a variable name throws instead of creating a global
- `examples/02-const-by-default.js` - `let` when we reassign, `const` for everything else, also for objects
- `examples/03-avoid-accidental-shadowing.js` - a parameter that hides an outer variable, and a better name for it
- `examples/04-smallest-scope.js` - `var` leaks loop helpers, `let` and `const` keep them inside the loop
- `examples/05-declare-before-use.js` - a `var` read too early gives `undefined`, a `const` throws
- `examples/06-this-in-callbacks.cjs` - a regular callback has its own `this`, an arrow callback uses the method's
- `examples/07-keep-only-what-a-closure-needs.js` - a closure that keeps a number instead of a whole array

Run one with `node 11-scope-and-variables/best-practices/examples/02-const-by-default.js` from the repository folder. Examples 1 and 6 end in `.cjs`, so Node runs them as plain scripts: example 1 turns strict mode on with the directive, and example 6 shows what the bad callback does in sloppy mode.
