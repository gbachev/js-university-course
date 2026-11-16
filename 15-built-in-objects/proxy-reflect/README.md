# Proxy and Reflect

Code for the lecture *Proxy and Reflect* (section 15, Built-in Objects) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-target-and-handler.js` - a `get` trap that logs every read, and a write without a trap
- `examples/02-reflect-and-receiver.js` - why a getter needs `Reflect.get()` with the receiver
- `examples/03-validating-settings.js` - a `set` trap that rejects unknown keys and invalid values
- `examples/04-default-values.js` - `get` and `has` traps that fall back to default preferences
- `examples/05-read-only-view.js` - a read-only view of a cart the owner can still change
- `examples/06-reactive-store.js` - a tiny store that renders on every change
- `examples/07-private-fields-and-maps.js` - private fields and `Map` through a proxy, and the fix

Run one with `node 15-built-in-objects/proxy-reflect/examples/01-target-and-handler.js` from the repository folder.

## Tasks
1. **Strict settings** (`tasks/01-strict-settings.js`) - a settings object that throws on unknown keys and on values of the wrong type
2. **Preferences with defaults** (`tasks/02-preferences-with-defaults.js`) - fix the defaults that replace a saved `false` or `0`, and make `in` see them
3. **The change log** (`tasks/03-change-log.js`) - log every change of an order through a `set` trap that returns `Reflect.set()`

Run the tests with `npm test -- 15-built-in-objects/proxy-reflect`. They fail until the task is solved. Compare with `solutions/` after you try.
