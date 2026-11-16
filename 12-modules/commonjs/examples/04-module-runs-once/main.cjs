// Run with: node 12-modules/commonjs/examples/04-module-runs-once/main.cjs
console.log('main.cjs starts');

const config = require('./config.cjs');
console.log('got', config.apiUrl);

// The second require() returns the cached module without running the file again.
const again = require('./config.cjs');
console.log(again === config);

// main.cjs starts
// config.cjs runs
// got https://api.example.com
// true
