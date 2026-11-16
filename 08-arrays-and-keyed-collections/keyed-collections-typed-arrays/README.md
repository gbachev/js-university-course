# Keyed Collections and Typed Arrays

Code for the lecture *Keyed Collections and Typed Arrays* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-map.js` - `set()`, `get()`, `has()`, `delete()`, `clear()` and `size`
- `examples/02-map-object-keys.js` - object keys are compared by reference
- `examples/03-map-chaining.js` - `set()` returns the map, so we can chain it
- `examples/04-map-json.js` - `JSON.stringify()` needs the map turned into an array first
- `examples/05-map-and-object.js` - from a map to an object and back
- `examples/06-map-nan-key.js` - `NaN` works as a key, although `NaN !== NaN`
- `examples/07-set.js` - a set keeps every value once
- `examples/08-remove-duplicates.js` - remove the duplicates of an array with a set
- `examples/09-set-object-values.js` - objects in a set are unique by reference
- `examples/10-weak-map.js` - a `WeakMap` with an object as the key
- `examples/11-weak-set.js` - a `WeakSet` of objects
- `examples/12-typed-array.js` - an `Int16Array` view over an `ArrayBuffer`
- `examples/13-uint8-overflow.js` - values outside 0 to 255 wrap around in a `Uint8Array`
- `examples/14-shared-buffer.js` - two views read the same byte in two ways

Run one with `node 08-arrays-and-keyed-collections/keyed-collections-typed-arrays/examples/01-map.js` from the repository folder.

## Tasks
1. **Unique tags** (`tasks/01-unique-tags.js`) - remove the duplicates of an array with a `Set`
2. **Count the page visits** (`tasks/02-page-visits.js`) - count the visits of every page of a log in a `Map`
3. **Orders sent twice** (`tasks/03-duplicate-orders.js`) - find the ids that appear more than once with two sets

Run the tests with `npm test -- 08-arrays-and-keyed-collections/keyed-collections-typed-arrays`. They fail until the task is solved. Compare with `solutions/` after you try.
