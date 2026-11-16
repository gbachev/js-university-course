// Task 1: The discount factory
// Lecture: Higher-Order Functions
//
// The shop runs sales with different discounts: 10% for members, 25% on Black Friday.
// Write discountOf(percent): it returns a new function that takes a price and returns
// the price with that discount taken off. Each returned function remembers its own
// percent, and it works as a map() callback. A percent of 0 keeps the price.
//
// Examples:
//   const memberPrice = discountOf(10);
//   memberPrice(50)                     // 45
//   [100, 20].map(discountOf(25))       // [75, 15]
//
// Run the tests: npm test -- 14-more-on-functions/higher-order

export function discountOf(percent) {
    // Your code here
}
