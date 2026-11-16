// Task 1: The running total
// Lecture: Variables
//
// cartTotal(prices) adds up the prices in an array and returns the sum. It throws a
// TypeError as soon as the cart has a price in it: the total changes on every step of
// the loop, but it was declared with const. Fix the declaration. An empty cart has a
// total of 0.
//
// Examples:
//   cartTotal([10, 5, 2.5])   // 17.5
//   cartTotal([])             // 0
//
// Run the tests: npm test -- 11-scope-and-variables/variables

export function cartTotal(prices) {
    const total = 0;

    for (const price of prices) {
        total = total + price;
    }

    return total;
}
