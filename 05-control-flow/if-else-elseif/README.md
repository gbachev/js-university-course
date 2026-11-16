# The "if", "else" and "else if" statements

Code for the lecture *The "if", "else" and "else if" statements* (section 5, Control flow) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-if-statement.js` - an `if` whose condition is true
- `examples/02-if-condition-false.js` - an `if` whose condition is false, so nothing prints
- `examples/03-two-if-statements.js` - covering both cases with two `if` statements
- `examples/04-if-else.js` - the same logic with `if` and `else`
- `examples/05-only-if-statements.js` - three age stages with three separate `if` statements
- `examples/06-else-if.js` - the same three stages with `else if`
- `examples/07-logical-operators.js` - `||` and `&&` inside the conditions
- `examples/08-nested-if.js` - nested `if` statements for the club entrance

Run one with `node 05-control-flow/if-else-elseif/examples/01-if-statement.js` from the repository folder.

## Tasks
1. **Free shipping** (`tasks/01-free-shipping.js`) - return the shipping cost of an order with `if` and `else`
2. **Exam grade** (`tasks/02-exam-grade.js`) - turn a score into a grade with an `else if` chain
3. **Cinema ticket** (`tasks/03-cinema-ticket.js`) - fix the conditions that give some ages the wrong price

Run the tests with `npm test -- 05-control-flow/if-else-elseif`. They fail until the task is solved. Compare with `solutions/` after you try.
