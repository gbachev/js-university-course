// Run with: node 12-modules/es-modules/examples/08-import-meta-and-top-level-await/main.js
// main.js runs only after version.js has finished its await.
import { version } from './version.js';

console.log(version); // 2.4.1
