// Task 2: The shop currency
// Lecture: Global Variables
//
// Our shop page sets its currency on the global object before our code runs, as
// globalThis.shopCurrency. Write getCurrency(): it returns globalThis.shopCurrency when
// it is a string that is not empty, and 'EUR' otherwise, for example when the page did
// not set it at all. Use globalThis, so the same code works in the browser and in Node.
//
// Examples:
//   getCurrency()   // 'EUR' (nothing set)
//   globalThis.shopCurrency = 'USD';
//   getCurrency()   // 'USD'
//
// Run the tests: npm test -- 11-scope-and-variables/global-variables

export function getCurrency() {
    // Your code here
}
