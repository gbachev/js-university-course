# Primitive types

Code for the lecture *Primitive types* (section 6, Types) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-immutability.js` - `toUpperCase()` creates a new string and leaves the original as it was
- `examples/02-copy-by-value.js` - changing a copy of a primitive does not change the original
- `examples/03-passing-a-primitive.js` - a function gets a copy of a primitive argument
- `examples/04-passing-an-object.js` - a function that changes an object changes the original object
- `examples/05-type-coercion.js` - `'3' + 4` concatenates, `'3' * '4'` multiplies
- `examples/06-methods-on-primitives.js` - a method call and a property on a string primitive

Run one with `node 06-types/primitives/examples/01-immutability.js` from the repository folder.

## Tasks
1. **Shout the headline** (`tasks/01-shout-the-headline.js`) - fix a function that forgets that strings are immutable
2. **Add the quantities** (`tasks/02-add-the-quantities.js`) - fix an addition that joins two strings instead of adding two numbers
3. **Rename a copy** (`tasks/03-rename-a-copy.js`) - return a renamed copy of a user without changing the original object

Run the tests with `npm test -- 06-types/primitives`. They fail until the task is solved. Compare with `solutions/` after you try.
