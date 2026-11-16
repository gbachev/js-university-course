# WeakMap, WeakSet and Typed Arrays

Code for the lecture *WeakMap, WeakSet and Typed Arrays* (section 8, Arrays and Keyed Collections) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-weak-map.js` - a `WeakMap` with an object as the key
- `examples/02-map-keeps-objects.js` - a regular `Map` keeps its keys alive
- `examples/03-weak-set.js` - a `WeakSet` of objects
- `examples/04-typed-array.js` - an `Int16Array` view over an `ArrayBuffer`
- `examples/05-uint8-overflow.js` - values outside 0 to 255 wrap around in a `Uint8Array`
- `examples/06-shared-buffer.js` - two views read the same byte in two ways
- `examples/07-float16-array.js` - a `Float16Array` stores each number in 2 bytes (needs Node 24 or a current browser)

Run one with `node 08-arrays-and-keyed-collections/keyed-collections-typed-arrays/examples/01-weak-map.js` from the repository folder.
