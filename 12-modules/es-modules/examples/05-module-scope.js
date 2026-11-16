// settings.js in the lecture
// Run with: node 12-modules/es-modules/examples/05-module-scope.js
const theme = 'dark';

console.log(globalThis.theme); // undefined
console.log(this); // undefined

try {
    discount = 10;
} catch (error) {
    console.log(error.name + ': ' + error.message);
}
// ReferenceError: discount is not defined
