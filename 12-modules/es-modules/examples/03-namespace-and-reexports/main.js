// Run with: node 12-modules/es-modules/examples/03-namespace-and-reexports/main.js
import * as shop from './shop.js';

console.log(Object.keys(shop));
// [ 'addVat', 'cartTotal', 'formatPrice' ]
console.log(shop.formatPrice(shop.addVat(25))); // €30.00
