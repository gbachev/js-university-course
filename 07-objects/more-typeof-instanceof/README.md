# typeof vs instanceof

Code for the lecture *typeof vs instanceof* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-instanceof-syntax.js` - the right-hand side of `instanceof` must be a constructor
- `examples/02-typeof.js` - `typeof` for primitives, objects of every kind and functions
- `examples/03-instanceof.js` - `instanceof` for the same values

Run one with `node 07-objects/more-typeof-instanceof/examples/01-instanceof-syntax.js` from the repository folder.

## Tasks
1. **Describe a value** (`tasks/01-describe-a-value.js`) - tell null, arrays and dates apart from other objects
2. **Count the objects** (`tasks/02-count-the-objects.js`) - fix two `typeof` bugs with `null` and functions
3. **Make it a product** (`tasks/03-make-it-a-product.js`) - turn plain objects into products with `instanceof`

Run the tests with `npm test -- 07-objects/more-typeof-instanceof`. They fail until the task is solved. Compare with `solutions/` after you try.
