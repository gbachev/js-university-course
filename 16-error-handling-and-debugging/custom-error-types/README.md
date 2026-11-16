# Custom Error Types

Code for the lecture *Custom Error Types* (section 16, Error Handling and Debugging) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-why-name-matters.js` - a class that extends `Error` still says `"Error"` without a name of its own
- `examples/02-base-class.js` - `AppError` sets the name with `new.target.name`, and `ValidationError` and `NotFoundError` add their fields and `statusCode`
- `examples/03-payment-error-with-cause.js` - `PaymentError` wraps a network error with `cause`
- `examples/04-handling-by-type.js` - one `catch` that answers by the type of the error and rethrows the rest
- `examples/05-instanceof-or-name.js` - a `switch` on `name` misses a child class, `instanceof` does not

Run one with `node 16-error-handling-and-debugging/custom-error-types/examples/01-why-name-matters.js` from the repository folder.

## Tasks
1. **Out of stock** (`tasks/01-out-of-stock.js`) - give an error class its own name and the fields the code that catches it needs
2. **The import error** (`tasks/02-import-error.js`) - add an `ImportError` to the hierarchy and wrap broken JSON in it with `cause`
3. **Answer by type** (`tasks/03-answer-by-type.js`) - replace a `switch` on `error.name` with `instanceof` checks and rethrow unknown errors

Run the tests with `npm test -- 16-error-handling-and-debugging/custom-error-types`. They fail until the task is solved. Compare with `solutions/` after you try.
