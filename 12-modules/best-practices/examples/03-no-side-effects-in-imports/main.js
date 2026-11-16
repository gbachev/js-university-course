// Run with: node 12-modules/best-practices/examples/03-no-side-effects-in-imports/main.js
// main.js is the entry file: it decides when the page view goes out.
import { sendPageView, track } from './analytics.js';

console.log('main.js starts');
sendPageView();
track('add to cart');

// main.js starts
// page view sent
// tracked: add to cart
