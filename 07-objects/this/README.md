# The "this" Keyword

Code for the lecture *The "this" Keyword* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-this-in-a-method.js` - in a method, `this` is the object
- `examples/02-this-outside-any-object.js` - `this` at the top level and in a regular function
- `examples/03-arrow-function-as-method.js` - an arrow function as a method has no `this` of its own
- `examples/04-regular-method.js` - the same method written as a regular method
- `examples/05-arrow-function-in-a-callback.js` - an arrow callback keeps the `this` of the method
- `examples/06-constructor-function.js` - `this` in a constructor function called with `new`
- `examples/07-class.js` - `this` in a class
- `examples/08-event-handlers.html` - `this` in a regular and in an arrow event handler (browser)
- `examples/09-losing-this.js` - a method stored in a variable loses its `this`
- `examples/10-bind.js` - `bind` fixes `this` for later calls
- `examples/11-call-apply-bind.js` - `call`, `apply` and `bind` side by side

Run one with `node 07-objects/this/examples/01-this-in-a-method.js` from the repository folder. For the browser example, run `npm run serve` and open `07-objects/this/examples/08-event-handlers.html` from the address it prints.

## Tasks
1. **Price with tax** (`tasks/01-price-with-tax.js`) - run a function with a product as its `this` using `call`
2. **The click counter** (`tasks/02-click-counter.js`) - fix a handler that loses its `this`, with `bind`
3. **The playlist summary** (`tasks/03-playlist-summary.js`) - fix a `forEach` callback that has the wrong `this`

Run the tests with `npm test -- 07-objects/this`. They fail until the task is solved. Compare with `solutions/` after you try.
