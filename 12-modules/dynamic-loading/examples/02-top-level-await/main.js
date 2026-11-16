// Run with: node 12-modules/dynamic-loading/examples/02-top-level-await/main.js
const { default: printReceipt, shopName } = await import(
    './receipt.js'
);

console.log(shopName);
console.log(printReceipt(30));

// receipt.js runs
// Doe Books
// Total: €30.00
