# Boxing and Wrapper Objects

Code for the lecture *Boxing and Wrapper Objects* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-primitive-and-wrapper.js` - a number primitive, a `Number` wrapper object and `valueOf()`
- `examples/02-method-on-a-primitive.js` - boxing lets us call `toUpperCase()` on a string primitive
- `examples/03-property-on-a-primitive.cjs` - a property added to a primitive is gone on the next line
- `examples/04-property-on-a-wrapper-object.js` - a property added to a wrapper object stays
- `examples/05-compare-primitive-and-wrapper.js` - `typeof`, `==` and `===` with a primitive and a wrapper object
- `examples/06-compare-two-wrappers.js` - two wrapper objects with the same value are never equal

Run one with `node 06-types/wrapper-objects/examples/01-primitive-and-wrapper.js` from the repository folder. Example 3 ends in `.cjs`, so Node runs it as a plain script, like the code in the lecture: in a module, which runs in strict mode, adding a property to a primitive throws a `TypeError` instead.

## Tasks
1. **Unwrap the price** (`tasks/01-unwrap-the-price.js`) - get the primitive value out of a wrapper object or a plain value
2. **Same amount?** (`tasks/02-same-amount.js`) - fix a comparison that says two wrapper objects with the same value differ

Run the tests with `npm test -- 06-types/wrapper-objects`. They fail until the task is solved. Compare with `solutions/` after you try.
