// Run with: node 12-modules/es-modules/examples/06-module-runs-once/main.js
// Side-effect imports: they run the modules but take no names from them.
import './api.js';
import './ui.js';
console.log('main.js runs');

// config.js runs
// api.js runs
// ui.js runs
// main.js runs
