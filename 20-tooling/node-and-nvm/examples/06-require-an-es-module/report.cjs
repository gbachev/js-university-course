// Run with: node 20-tooling/node-and-nvm/examples/06-require-an-es-module/report.cjs
// Needs Node 22.12 or newer. prices.js is an ES module, because of "type": "module".
const { addVat } = require('./prices.js');

console.log(addVat(28)); // 33.6
