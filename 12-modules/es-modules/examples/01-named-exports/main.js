// Run with: node 12-modules/es-modules/examples/01-named-exports/main.js
import { VAT_RATE, addVat, formatPrice as format } from './prices.js';

console.log(VAT_RATE); // 0.2
console.log(addVat(25)); // 30
console.log(format(addVat(25))); // €30.00
