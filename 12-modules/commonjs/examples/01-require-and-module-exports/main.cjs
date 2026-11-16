// Run with: node 12-modules/commonjs/examples/01-require-and-module-exports/main.cjs
const { addVat, formatPrice } = require('./prices.cjs');
const prices = require('./prices.cjs');

console.log(formatPrice(addVat(25))); // €30.00
console.log(prices.VAT_RATE); // 0.2
console.log(prices.round); // undefined
