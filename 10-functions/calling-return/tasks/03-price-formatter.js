// Task 3: A function that makes functions
// Lecture: Calling Functions and Return Values
//
// Our shop sells in several currencies. Write makePriceFormatter(currency): it does
// not format anything itself, it returns a new function. That function takes an
// amount and returns it with 2 decimals, a space and the currency, like
// createGreeting() in the lecture returns a function that uses the name it got.
//
// Examples:
//   const euro = makePriceFormatter('EUR');
//   euro(12.5)                          // '12.50 EUR'
//   makePriceFormatter('USD')(3)        // '3.00 USD'
//
// Run the tests: npm test -- 10-functions/calling-return

export function makePriceFormatter(currency) {
    // Your code here
}
