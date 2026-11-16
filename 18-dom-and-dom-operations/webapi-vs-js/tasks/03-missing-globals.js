// Task 3: Which globals are missing?
// Lecture: Web APIs vs JavaScript
//
// Before our code runs in a new host, we want to know which of the APIs it needs are not
// there. Write missingGlobals(names), which takes an array of global names and returns a
// new array with the names that do not exist on the global object, in the same order.
// It must work in a browser and in Node.js, so we check the global object of the host we
// run in. When nothing is missing, it returns an empty array.
//
// Examples:
//   missingGlobals(['fetch', 'document'])   // in Node.js: ['document']
//   missingGlobals(['fetch', 'document'])   // in a browser: []
//
// Run the tests: npm test -- 18-dom-and-dom-operations/webapi-vs-js

export function missingGlobals(names) {
    // Your code here
}
