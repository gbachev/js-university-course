// Run with: node 12-modules/best-practices/examples/04-full-import-paths/main.js
// considered bad practice: no extension
// import { addVat } from './prices';
// Error [ERR_MODULE_NOT_FOUND]: Cannot find module '.../prices' imported from .../main.js
// Did you mean to import "./prices.js"?

// better: the full file name works in Node and in the browser
import { addVat } from './prices.js';

console.log(addVat(25)); // 30
