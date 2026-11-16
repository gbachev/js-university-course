// Run with: node 12-modules/commonjs/examples/08-import-commonjs-from-esm/main.mjs
// The default import of a CommonJS file is always its module.exports.
import prices from './prices.cjs';
import { addVat, formatPrice } from './prices.cjs';
import greet from './greet.cjs';

console.log(Object.keys(prices));
// [ 'VAT_RATE', 'addVat', 'formatPrice' ]
console.log(formatPrice(addVat(25))); // €30.00
console.log(greet('John Doe')); // Welcome back, John Doe!
