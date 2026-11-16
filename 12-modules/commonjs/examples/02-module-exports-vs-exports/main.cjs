// Run with: node 12-modules/commonjs/examples/02-module-exports-vs-exports/main.cjs
const { studentDiscount, applyDiscount } = require('./discounts.cjs');
const coupons = require('./coupons.cjs');
const greet = require('./greet.cjs');

console.log(applyDiscount(50, studentDiscount)); // 45
console.log(coupons); // {}
console.log(greet('Jane Doe')); // Welcome back, Jane Doe!
