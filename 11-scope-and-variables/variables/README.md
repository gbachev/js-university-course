# Variables

Code for the lecture *Variables* (section 11, Scope and Variables) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-declaring.js` - `var`, `let` and `const`
- `examples/02-declaration-initialization-assignment.js` - declare first and assign later, and why `const` needs a value right away
- `examples/03-const-cannot-be-reassigned.js` - assigning to a `const` throws a `TypeError`
- `examples/04-naming-rules.js` - valid and invalid variable names
- `examples/05-dynamic-typing.js` - one variable holds a number, then a string, then a boolean

Run one with `node 11-scope-and-variables/variables/examples/01-declaring.js` from the repository folder.

## Tasks
1. **The running total** (`tasks/01-running-total.js`) - fix a cart total that throws because it was declared with `const`
2. **A valid variable name?** (`tasks/02-valid-variable-name.js`) - check a name against the naming rules of the lecture

Run the tests with `npm test -- 11-scope-and-variables/variables`. They fail until the task is solved. Compare with `solutions/` after you try.
