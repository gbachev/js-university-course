// Run with: node 12-modules/commonjs/examples/09-require-an-es-module/report.cjs
// Needs Node 22.12 or newer. require() returns the module namespace object,
// so the default export sits under .default.
const cart = require('./cart.mjs');

console.log(cart.currency); // EUR
console.log(cart.default([10, 2.5])); // 12.5
