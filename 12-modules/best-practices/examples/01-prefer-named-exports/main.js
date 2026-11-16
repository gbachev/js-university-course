// Run with: node 12-modules/best-practices/examples/01-prefer-named-exports/main.js
import { cartTotal } from './cart.js';

const items = [{ price: 10 }, { price: 2.5 }];
console.log(cartTotal(items)); // 12.5

// a typo fails before any code runs:
// import { cartTotl } from './cart.js';
// SyntaxError: The requested module './cart.js' does not
// provide an export named 'cartTotl'
