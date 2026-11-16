// An ES module (a .js file in this repository), where __dirname does not exist.
// Run with: node 12-modules/commonjs/examples/07-no-dirname-in-esm.js
try {
    console.log(__dirname);
} catch (error) {
    console.log(error.name + ': ' + error.message);
}
// ReferenceError: __dirname is not defined
// Without the try, Node stops and prints the longer wording:
// ReferenceError: __dirname is not defined in ES module scope
