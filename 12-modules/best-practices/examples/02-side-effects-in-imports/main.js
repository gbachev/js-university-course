// Run with: node 12-modules/best-practices/examples/02-side-effects-in-imports/main.js
import { track } from './analytics.js';

console.log('main.js starts');
track('add to cart');

// page view sent
// main.js starts
// tracked: add to cart
