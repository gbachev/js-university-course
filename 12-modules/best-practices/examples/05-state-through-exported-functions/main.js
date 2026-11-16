// Run with: node 12-modules/best-practices/examples/05-state-through-exported-functions/main.js
import { itemsInStock, sellOne } from './stock.js';

// considered bad practice, and a TypeError here:
// itemsInStock -= 1;

// better: the owner changes it and keeps its rules
sellOne();
sellOne();
console.log(itemsInStock); // 0
