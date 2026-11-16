# Parameters and Arguments

Code for the lecture *Parameters and Arguments* (section 10, Functions) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-parameters-and-arguments.js` - a parameter in the definition, an argument in the call
- `examples/02-too-few-or-too-many.js` - missing arguments are `undefined`, extra ones are ignored, and `length`
- `examples/03-default-parameters.js` - default parameters for a missing or `undefined` argument
- `examples/04-defaults-before-es6.js` - defaults with `||`, and why `0` gets replaced
- `examples/05-arguments-object.js` - adding up every argument with `arguments`
- `examples/06-arguments-strict-mode.js` - in strict mode, changing a parameter does not change `arguments`
- `examples/07-arguments-sloppy-mode.cjs` - without strict mode, it does
- `examples/08-rest-parameters.js` - rest parameters, alone and after fixed parameters
- `examples/09-rest-vs-arguments.js` - `arguments` is not an array, rest parameters are
- `examples/10-destructuring-objects.js` - destructuring an object parameter, with defaults
- `examples/11-destructuring-arrays.js` - destructuring an array parameter
- `examples/12-missing-object.js` - a call with no object throws, and a default of `{}` fixes it
- `examples/13-by-value.js` - a primitive argument is copied
- `examples/14-by-reference.js` - changing an object argument changes the original, reassigning it does not

Run one with `node 10-functions/params-args/examples/01-parameters-and-arguments.js` from the repository folder.

## Tasks
1. **Zero decimals** (`tasks/01-zero-decimals.js`) - replace `||` defaults with default parameters, so 0 decimals stay 0
2. **Any number of items** (`tasks/02-any-number-of-items.js`) - add up the shipping and any number of prices with a rest parameter
3. **Account options** (`tasks/03-account-options.js`) - destructure an options object with defaults, also when no object is passed

Run the tests with `npm test -- 10-functions/params-args`. They fail until the task is solved. Compare with `solutions/` after you try.
