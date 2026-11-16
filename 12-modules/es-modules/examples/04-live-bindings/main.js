// Run with: node 12-modules/es-modules/examples/04-live-bindings/main.js
import { itemsInStock, sellOne } from './stock.js';

console.log(itemsInStock); // 3
sellOne();
console.log(itemsInStock); // 2

try {
    itemsInStock = 10;
} catch (error) {
    console.log(error.name + ': ' + error.message);
}
// TypeError: Assignment to constant variable.
