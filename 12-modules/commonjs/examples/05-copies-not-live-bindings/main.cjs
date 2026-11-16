// Run with: node 12-modules/commonjs/examples/05-copies-not-live-bindings/main.cjs
const stock = require('./stock.cjs');

console.log(stock.itemsInStock); // 3
stock.sellOne();
console.log(stock.itemsInStock); // 3
console.log(stock.getStock()); // 2

stock.itemsInStock = 10;
console.log(stock.itemsInStock); // 10
console.log(stock.getStock()); // 2
