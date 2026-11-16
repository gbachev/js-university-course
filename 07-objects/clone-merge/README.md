# Object Cloning and Merging

Code for the lecture *Object Cloning and Merging* (section 7, Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-assigning-by-reference.js` - assigning an object copies the reference
- `examples/02-object-assign-clone.js` - a shallow copy with `Object.assign()`
- `examples/03-object-assign-merge.js` - later sources overwrite the same keys
- `examples/04-object-assign-is-shallow.js` - nested objects are still shared
- `examples/05-spread-clone.js` - a shallow copy with the spread syntax
- `examples/06-spread-merge.js` - merging defaults and user preferences with spread
- `examples/07-json-deep-clone.js` - a deep copy with `JSON.parse(JSON.stringify())`
- `examples/08-json-clone-limits.js` - what the JSON copy loses: functions, `undefined`, symbols, dates
- `examples/09-json-circular-reference.js` - the JSON copy fails on circular references
- `examples/10-recursive-deep-clone.js` - a basic recursive deep clone
- `examples/11-structured-clone.js` - the native deep copy with `structuredClone()`, and its error on functions
- `examples/12-merging-objects.js` - merging with `Object.assign()` and with spread
- `examples/13-no-deep-merge.js` - nested objects are replaced, not merged

Run one with `node 07-objects/clone-merge/examples/01-assigning-by-reference.js` from the repository folder. The Lodash `cloneDeep()` example of the lecture needs an npm package, so it is not here.

## Tasks
1. **User settings** (`tasks/01-user-settings.js`) - merge defaults and user preferences into a new object
2. **Repeat an order** (`tasks/02-repeat-order.js`) - fix a copy that shares its nested address with the old order
3. **Merge the preferences** (`tasks/03-merge-preferences.js`) - merge groups of settings one level deep

Run the tests with `npm test -- 07-objects/clone-merge`. They fail until the task is solved. Compare with `solutions/` after you try.
