# The this Keyword

Code for the lecture *The this Keyword* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-this-in-a-method.js` - in a method, `this` is the object the method is called on
- `examples/02-losing-this.js` - a method stored in a variable and called on its own loses its `this`

Run one with `node 07-objects/this/examples/01-this-in-a-method.js` from the repository folder.

## Tasks
1. **The order line** (`tasks/01-order-line.js`) - write two methods that read the line's values through `this`
2. **The checkout label** (`tasks/02-checkout-label.js`) - fix a method that loses its `this` when it is stored in a variable
3. **The click counter** (`tasks/03-click-counter.js`) - return a handler that keeps its counter when it is called on its own

Run the tests with `npm test -- 07-objects/this`. They fail until the task is solved. Compare with `solutions/` after you try.
