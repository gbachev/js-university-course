# Prototypes: A First Look

Code for the lecture *Prototypes: A First Look* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-inherited-method.js` - `toString()` is not on the object: JavaScript finds it on `Object.prototype`

Run it with `node 07-objects/prototypes-inheritance-intro/examples/01-inherited-method.js` from the repository folder.

## Tasks
1. **Own or inherited?** (`tasks/01-own-or-inherited.js`) - tell whether a property is the object's own, inherited or missing
2. **Find the owner** (`tasks/02-find-the-owner.js`) - follow the prototype chain to the object that holds a property

Run the tests with `npm test -- 07-objects/prototypes-inheritance-intro`. They fail until the task is solved. Compare with `solutions/` after you try.
