# Object Immutability

Code for the lecture *Object Immutability* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-freeze.js` - a frozen object rejects every change
- `examples/02-freeze-is-shallow.js` - nested objects of a frozen object can still change
- `examples/03-seal.js` - a sealed object takes new values, but no new or deleted properties
- `examples/04-checking-immutability.js` - `Object.isFrozen()` and `Object.isSealed()`
- `examples/05-prevent-extensions.js` - no new properties, but deletes are allowed

Run one with `node 07-objects/object-immutability/examples/01-freeze.js` from the repository folder.

## Tasks
1. **A frozen config** (`tasks/01-frozen-config.js`) - return a config object that cannot be changed
2. **The sign-up form** (`tasks/02-signup-form.js`) - a form whose fields can change but not be added or removed
3. **Freeze all the way down** (`tasks/03-deep-freeze.js`) - fix a freeze that leaves the nested objects open

Run the tests with `npm test -- 07-objects/object-immutability`. They fail until the task is solved. Compare with `solutions/` after you try.
