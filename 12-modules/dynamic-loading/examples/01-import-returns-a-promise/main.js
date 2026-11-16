// Run with: node 12-modules/dynamic-loading/examples/01-import-returns-a-promise/main.js
console.log('main.js starts');

// import() returns a promise; .then() gets the module namespace object.
import('./receipt.js').then((receipt) => {
    console.log(receipt.shopName);
    console.log(receipt.default(12.5));
});

console.log('main.js goes on');

// main.js starts
// main.js goes on
// receipt.js runs
// Doe Books
// Total: €12.50
