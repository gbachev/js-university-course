# Object.create()

Code for the lecture *Object.create()* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-create-with-prototype.js` - settings created with their defaults as the prototype, and a string that throws
- `examples/02-shared-cart-methods.js` - a `createCart()` factory: shared methods, own data
- `examples/03-shared-array-bug.js` - an array on the prototype ends up in every cart
- `examples/04-property-descriptors.js` - the second argument: an enumerable name and a read-only id
- `examples/05-null-prototype-counter.js` - a word counter on a plain object and on `Object.create(null)`
- `examples/06-pure-dictionary.js` - a null-prototype dictionary: `__proto__` is a key, no inherited methods
- `examples/07-inheritance-chain.js` - members, editors and Jane Doe in a chain of `Object.create()` calls
- `examples/08-three-ways.js` - `Object.create()`, a `__proto__` literal and `Object.setPrototypeOf()` side by side

Run one with `node 13-inheritance-and-prototype/object-create/examples/01-create-with-prototype.js` from the repository folder.

## Tasks
1. **A wishlist factory** (`tasks/01-wishlist-factory.js`) - create wishlists that share their methods and own their titles
2. **Fix the shared tags** (`tasks/02-shared-tags.js`) - fix posts that all share one tags array on the prototype
3. **Count the votes** (`tasks/03-count-the-votes.js`) - count votes for any title, even `constructor` and `__proto__`

Run the tests with `npm test -- 13-inheritance-and-prototype/object-create`. They fail until the task is solved. Compare with `solutions/` after you try.
