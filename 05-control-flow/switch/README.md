# The switch Statement

Code for the lecture *The switch Statement* (section 5, Control Flow) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-switch-fruit.js` - a first `switch` with `case`, `break` and `default`
- `examples/02-strict-comparison.js` - `case` compares strictly, so `'2'` does not match `2`
- `examples/03-default.js` - `default` runs when no case matches
- `examples/04-missing-break.js` - without `break` every case after the match runs
- `examples/05-fall-through-days.js` - fall-through on purpose, day by day to the weekend
- `examples/06-grouped-cases.js` - several cases sharing one block
- `examples/07-if-else-if-roles.js` - user roles with an `if ... else if` chain
- `examples/08-switch-roles.js` - the same roles with `switch`
- `examples/09-nested-switch.js` - a `switch` inside a `switch`
- `examples/10-object-lookup.js` - the nested switch replaced by an object lookup

Run one with `node 05-control-flow/switch/examples/01-switch-fruit.js` from the repository folder.

## Tasks
1. **Order status** (`tasks/01-order-status.js`) - return a message for each order status with a `switch`
2. **Season of the month** (`tasks/02-season-of-the-month.js`) - group the months of each season into shared cases
3. **Member discount** (`tasks/03-member-discount.js`) - fix the `switch` that gives every member 0 percent

Run the tests with `npm test -- 05-control-flow/switch`. They fail until the task is solved. Compare with `solutions/` after you try.
