// Task 2: The discount factory
// Lecture: Closures
//
// Write createDiscount(percent). It returns a function that takes a price and returns
// the price with percent taken off, rounded to 2 decimal places. Every function we get
// remembers its own percent, so a 10% and a 25% discount work side by side. A discount
// of 0 leaves the price as it is.
//
// Examples:
//   const tenOff = createDiscount(10);
//   tenOff(50)                 // 45
//   createDiscount(25)(19.99)  // 14.99
//
// Run the tests: npm test -- 11-scope-and-variables/closures

export function createDiscount(percent) {
    // Your code here
}
