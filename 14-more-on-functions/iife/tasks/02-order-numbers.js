// Task 2: Order numbers
// Lecture: IIFE (Immediately Invoked Function Expressions)
//
// Every new order in our shop gets a number: 'ORD-1', then 'ORD-2', and so on. Finish
// the IIFE so that orderNumbers gets an object with two methods: next() returns the
// next order number, and reset() starts again from 'ORD-1'. Keep the count in a
// variable inside the IIFE, so nobody outside can change it: orderNumbers has no
// count property.
//
// Examples:
//   orderNumbers.next()     // 'ORD-1'
//   orderNumbers.next()     // 'ORD-2'
//   orderNumbers.reset();
//   orderNumbers.next()     // 'ORD-1'
//
// Run the tests: npm test -- 14-more-on-functions/iife

export const orderNumbers = (function () {
    // Your code here
})();
