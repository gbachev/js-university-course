# JSON

Code for the lecture *JSON* (section 15, Built-in Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-stringify.js` - `JSON.stringify()` gives a compact string, and the third argument indents it
- `examples/02-dropped-or-converted.js` - what gets dropped or turned into `null`, and the `TypeError` for a `BigInt`
- `examples/03-replacer.js` - a replacer array that keeps some keys, and a replacer function that hides a password
- `examples/04-to-json.js` - a `toJSON()` method that serializes a `Map`, and how dates use it
- `examples/05-parse-and-reviver.js` - `JSON.parse()`, and a reviver that turns a string back into a `Date`
- `examples/06-invalid-input.js` - any JSON value at the top level, and the `SyntaxError` for invalid JSON
- `examples/07-safe-default.js` - `try...catch` around `JSON.parse()` for a safe default

Run one with `node 15-built-in-objects/json/examples/01-stringify.js` from the repository folder.

## Tasks
1. **Hide the secrets** (`tasks/01-hide-the-secrets.js`) - turn a user into JSON without its password and token, also in nested objects
2. **Load the saved cart** (`tasks/02-load-the-cart.js`) - parse a saved cart, with an empty cart for broken JSON or nothing saved
3. **Revive the dates** (`tasks/03-revive-the-dates.js`) - parse an order with a reviver that turns every date string into a `Date`

Run the tests with `npm test -- 15-built-in-objects/json`. They fail until the task is solved. Compare with `solutions/` after you try.
