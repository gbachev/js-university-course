# Constructor Functions

Code for the lecture *Constructor Functions* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-called-with-new.js` - a `Person` constructor called with `new`
- `examples/02-four-steps-by-hand.js` - the four steps of `new`, done with `Object.create()` and `call()`
- `examples/03-prototype-property.js` - `Person.prototype`, the instance link and the `constructor` property
- `examples/04-prototype-vs-constructor-methods.js` - a method copied per cart and one shared on the prototype
- `examples/05-forgetting-new.js` - a constructor called without `new` in strict mode
- `examples/06-new-target.js` - a `new.target` check that throws without `new`
- `examples/07-inheritance-between-constructors.js` - an `Employee` that inherits from `Person`

Run one with `node 13-inheritance-and-prototype/constructor-functions/examples/01-called-with-new.js` from the repository folder.

## Tasks
1. **A Book constructor** (`tasks/01-book-constructor.js`) - write a constructor with a shared method on its prototype
2. **Guard against a missing new** (`tasks/02-guard-against-missing-new.js`) - make an `Order` constructor throw a clear error without `new`
3. **An ebook is a book** (`tasks/03-ebook-is-a-book.js`) - make an `Ebook` constructor inherit from `Book`

Run the tests with `npm test -- 13-inheritance-and-prototype/constructor-functions`. They fail until the task is solved. Compare with `solutions/` after you try.
