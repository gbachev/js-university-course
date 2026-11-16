// Run with: node 12-modules/amd-umd/examples/02-umd/main.cjs
// In Node the UMD file takes its CommonJS branch.
const { formatPrice } = require('./prices.umd.js');

console.log(formatPrice(9.5)); // €9.50
