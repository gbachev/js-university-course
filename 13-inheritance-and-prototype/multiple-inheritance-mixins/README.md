# Mixins and Multiple Inheritance

Code for the lecture *Mixins and Multiple Inheritance* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-one-parent-only.js` - `extends` takes one parent, two are a `SyntaxError`
- `examples/02-object-assign-mixins.js` - object mixins copied onto a class prototype with `Object.assign()`
- `examples/03-mixin-factories.js` - `Serializable` and `Emitter` mixin factories around an `Entity`
- `examples/04-composition.js` - notes that hold an `EventBus` instead of inheriting from it
- `examples/05-name-clash.js` - two mixins with the same method name, and a hidden dependency
- `examples/06-mixins-and-instanceof.js` - a mixin is not in the chain, so we check for the method

Run one with `node 13-inheritance-and-prototype/multiple-inheritance-mixins/examples/01-one-parent-only.js` from the repository folder.

## Tasks
1. **A price mixin** (`tasks/01-price-mixin.js`) - share price methods between books and courses with an object mixin
2. **A discount mixin factory** (`tasks/02-discountable-mixin.js`) - a mixin factory that adds a private discount to any class
3. **Compose instead of inherit** (`tasks/03-compose-the-logger.js`) - give a checkout a logger instead of a parent class

Run the tests with `npm test -- 13-inheritance-and-prototype/multiple-inheritance-mixins`. They fail until the task is solved. Compare with `solutions/` after you try.
