const path = require('node:path');
const fs = require('node:fs');

// The VERSION file next to this one, from whatever folder we start node.
const file = path.join(__dirname, 'VERSION');

console.log(__filename); // .../06-dirname-and-filename/version.cjs
console.log(file); // .../06-dirname-and-filename/VERSION

module.exports = fs.readFileSync(file, 'utf8').trim();
