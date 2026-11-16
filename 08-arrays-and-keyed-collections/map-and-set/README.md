# Map and Set

Code for the lecture *Map and Set* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-map.js` - `set()`, `get()`, `has()`, `delete()`, `clear()` and `size`
- `examples/02-map-keys.js` - keys are not converted, objects are compared by reference, and `NaN` works as a key
- `examples/03-map-iteration.js` - chaining `set()` and looping over a map with `for...of`
- `examples/04-map-json-and-objects.js` - `JSON.stringify()` needs the map turned into an array, and from a map to an object and back
- `examples/05-set.js` - a set keeps every value once, and removes the duplicates of an array
- `examples/06-set-object-values.js` - objects in a set are unique by reference
- `examples/07-set-methods.js` - `union()`, `intersection()`, `difference()` and the other ES2025 set methods
- `examples/08-map-group-by.js` - `Map.groupBy()` keeps keys that are not strings

Run one with `node 08-arrays-and-keyed-collections/map-and-set/examples/01-map.js` from the repository folder.

## Tasks
1. **Unique tags** (`tasks/01-unique-tags.js`) - remove the duplicates of an array with a `Set`
2. **Count the page visits** (`tasks/02-page-visits.js`) - count the visits of every page of a log in a `Map`
3. **Orders sent twice** (`tasks/03-duplicate-orders.js`) - find the ids that appear more than once with two sets

Run the tests with `npm test -- 08-arrays-and-keyed-collections/map-and-set`. They fail until the task is solved. Compare with `solutions/` after you try.
