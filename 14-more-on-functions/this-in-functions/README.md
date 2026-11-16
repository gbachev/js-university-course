# this in Functions: call(), apply() and bind()

Code for the lecture *this in Functions: call(), apply() and bind()* (section 14, More on Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-binding-precedence.js` - `call()` on a method wins over the object before the dot
- `examples/02-losing-this-in-callbacks.js` - a class method passed to `forEach` loses its `this`
- `examples/03-keeping-this-at-the-call-site.js` - an arrow wrapper, `bind()` and `thisArg`
- `examples/04-arrow-class-field.js` - an arrow function in a class field keeps its instance
- `examples/05-call-and-apply.js` - `call()` and `apply()` side by side, and spread instead of `apply()`
- `examples/06-borrowing-a-method.js` - borrowing `Object.prototype.toString()` for a type tag
- `examples/07-partial-application.js` - `bind()` fixes the first argument of `addTax`
- `examples/08-bound-function-stays-bound.js` - a bound function ignores `call()` and a second `bind()`, but not `new`
- `examples/09-arrow-functions-ignore-this.js` - `call()` and `bind()` cannot change the `this` of an arrow function

Run one with `node 14-more-on-functions/this-in-functions/examples/01-binding-precedence.js` from the repository folder.

## Tasks
1. **The type tag** (`tasks/01-type-tag.js`) - borrow `Object.prototype.toString` with `call` to name the type of any value
2. **Add them all** (`tasks/02-add-all.js`) - fix a class method that loses its `this` when passed to `forEach`
3. **One formatter per currency** (`tasks/03-price-formatter.js`) - preset the currency of a price formatter with `bind`

Run the tests with `npm test -- 14-more-on-functions/this-in-functions`. They fail until the task is solved. Compare with `solutions/` after you try.
