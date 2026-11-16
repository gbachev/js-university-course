// Run with: node 20-tooling/node-and-nvm/examples/05-import-meta/paths.js
// An ES module (a .js file in this repository). The paths are the ones on our machine.
console.log(import.meta.url);
// file:///home/jane/js-university-course/20-tooling/node-and-nvm/examples/05-import-meta/paths.js
console.log(import.meta.filename);
// /home/jane/js-university-course/20-tooling/node-and-nvm/examples/05-import-meta/paths.js
console.log(import.meta.dirname);
// /home/jane/js-university-course/20-tooling/node-and-nvm/examples/05-import-meta

try {
    console.log(__dirname);
} catch (error) {
    console.log(error.name + ': ' + error.message);
}
// ReferenceError: __dirname is not defined
