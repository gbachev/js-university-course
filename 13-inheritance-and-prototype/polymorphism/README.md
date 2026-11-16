# Polymorphism

Code for the lecture *Polymorphism* (section 13, Inheritance and Prototype) of the JavaScript course at gbachev.com.

## Examples
- `examples/01-same-call-different-results.js` - one `toString()` call on an array, an object, a number and a boolean
- `examples/02-override-tostring.js` - an `Order` with its own `toString()`
- `examples/03-switch-on-type.js` - notifications sent with a `switch` on the channel type
- `examples/04-methods-instead-of-switch.js` - channel classes that each override `send()`
- `examples/05-duck-typing.js` - invoice lines from a class, a factory and a literal, all with `render()`

Run one with `node 13-inheritance-and-prototype/polymorphism/examples/01-same-call-different-results.js` from the repository folder.

## Tasks
1. **A readable product** (`tasks/01-readable-product.js`) - override `toString()` so products print well in emails
2. **Shipping cost per product type** (`tasks/02-shipping-cost.js`) - give every product class its own `shippingCost()`
3. **Export what can be exported** (`tasks/03-export-rows.js`) - export every item that has a `toRow()` method, whatever built it

Run the tests with `npm test -- 13-inheritance-and-prototype/polymorphism`. They fail until the task is solved. Compare with `solutions/` after you try.
