# Named vs Anonymous Functions

Code for the lecture *Named vs Anonymous Functions* (section 10, Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-named-function.js` - a named function declaration
- `examples/02-named-function-expression.js` - a function expression with its own name
- `examples/03-name-is-local.js` - the name of a function expression exists only inside the function
- `examples/04-recursion.js` - a named function expression that calls itself
- `examples/05-hoisting.js` - a declaration can be called before its line, a function expression cannot
- `examples/06-anonymous-function.js` - an anonymous function assigned to a variable
- `examples/07-anonymous-callback.js` - an anonymous function passed to `setTimeout`
- `examples/08-arrow-function-name.js` - an arrow function gets the name of its variable

Run one with `node 10-functions/named-vs-anonymous/examples/01-named-function.js` from the repository folder.

## Tasks
1. **Name the function** (`tasks/01-name-the-function.js`) - read the name of a function, or say it is anonymous
2. **Loyalty points** (`tasks/02-loyalty-points.js`) - fix a call to a name that exists only inside a function expression
3. **Countdown** (`tasks/03-countdown.js`) - count down to 'Go!' with a named function expression that calls itself

Run the tests with `npm test -- 10-functions/named-vs-anonymous`. They fail until the task is solved. Compare with `solutions/` after you try.
