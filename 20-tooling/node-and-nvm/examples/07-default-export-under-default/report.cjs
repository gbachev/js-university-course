// Run with: node 20-tooling/node-and-nvm/examples/07-default-export-under-default/report.cjs
// Needs Node 22.12 or newer. require() returns the module namespace object,
// so the default export sits under .default.
const cart = require('./cart.mjs');

console.log(cart.currency); // EUR
console.log(cart.default([10, 2.5])); // 12.5
