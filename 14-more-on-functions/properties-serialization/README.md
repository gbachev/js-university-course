# Function Properties and Serialization

Code for the lecture *Function Properties and Serialization* (section 14, More on Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-name.js` - declared and inferred names
- `examples/02-names-we-never-write.js` - `bound greet`, `anonymous` and the empty name
- `examples/03-length.js` - what `length` counts with defaults, rest and destructured parameters
- `examples/04-call-counter.js` - a property of our own on a function
- `examples/05-to-string.js` - `toString()` returns the source text, or `[native code]`
- `examples/06-functions-and-json.js` - `JSON.stringify()` skips functions
- `examples/07-rebuild-from-a-string.js` - a function rebuilt with `new Function()` loses its closure
- `examples/08-save-a-key.js` - saving a key that picks a function from a lookup object

Run one with `node 14-more-on-functions/properties-serialization/examples/01-name.js` from the repository folder.

## Tasks
1. **Describe a plugin** (`tasks/01-describe-function.js`) - read the `name` and `length` of a function
2. **Count the calls** (`tasks/02-count-calls.js`) - a wrapper with a `calls` property of its own
3. **The saved discount** (`tasks/03-saved-discount.js`) - replace `eval()` with a lookup object of functions

Run the tests with `npm test -- 14-more-on-functions/properties-serialization`. They fail until the task is solved. Compare with `solutions/` after you try.
