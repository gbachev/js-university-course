// Run with: node 12-modules/es-modules/examples/02-default-export/main.js
// cart.js calls its default export cartTotal, here we call it getTotal.
import getTotal from './cart.js';
import { formatPrice } from './prices.js';

const items = [
    { name: 'Notebook', price: 10 },
    { name: 'Pen', price: 2.5 },
];

console.log(formatPrice(getTotal(items))); // €15.00
