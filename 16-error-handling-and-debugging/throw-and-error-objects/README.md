# throw and Error Objects

Code for the lecture *throw and Error Objects* (section 16, Error Handling and Debugging) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-throw-a-string.js` - a thrown string has no stack and is not an `Error`
- `examples/02-throw-an-error.js` - the same function throwing an `Error`, with `name`, `message` and `stack`
- `examples/03-built-in-types.js` - triggering `TypeError`, `RangeError`, `SyntaxError`, `ReferenceError` and `URIError`
- `examples/04-throw-early.js` - `applyDiscount()` throws a `TypeError` or a `RangeError` with a good message
- `examples/05-cause.js` - wrapping a `SyntaxError` in an `Error` with `cause`
- `examples/06-instanceof.js` - checking the type in `catch` with `instanceof`, the most specific first

Run one with `node 16-error-handling-and-debugging/throw-and-error-objects/examples/01-throw-a-string.js` from the repository folder.

## Tasks
1. **A real error** (`tasks/01-a-real-error.js`) - throw a `RangeError` instead of a string for a withdrawal that is too big
2. **Check the quantity** (`tasks/02-check-the-quantity.js`) - throw a `TypeError` or a `RangeError` with a clear message for a bad quantity
3. **Add the cause** (`tasks/03-add-the-cause.js`) - wrap the `SyntaxError` of a broken profile in an error with context and `cause`

Run the tests with `npm test -- 16-error-handling-and-debugging/throw-and-error-objects`. They fail until the task is solved. Compare with `solutions/` after you try.
