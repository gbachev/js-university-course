// Task 1: Where does the total go?
// Lecture: Web APIs vs JavaScript
//
// showTotal(total) puts "Total: 88.50 EUR" in the browser tab. Our tests run in Node.js,
// where there is no document, and there it throws a ReferenceError. Fix it with feature
// detection: when document exists, set document.title as before; when it does not,
// print the same text with console.log() instead. The total always has two decimals.
//
// Examples:
//   showTotal(88.5)   // in a browser: the tab title becomes Total: 88.50 EUR
//   showTotal(88.5)   // in Node.js: prints Total: 88.50 EUR
//
// Run the tests: npm test -- 18-dom-and-dom-operations/webapi-vs-js

export function showTotal(total) {
    document.title = `Total: ${total.toFixed(2)} EUR`;
}
