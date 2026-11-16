// Task 1: The cheapest prices
// Lecture: Other Debugging Tools and Methods
//
// cheapestPrices(prices, count) should return the count cheapest prices, from the
// cheapest up, without changing the array we pass in. The deals page shows the wrong
// prices. Isolate the bug as in the lecture: log what each step gives on its own,
// find the step that is wrong and fix it.
//
// Examples:
//   cheapestPrices([9, 120, 15, 4.5], 2)    // [4.5, 9]
//   cheapestPrices([30, 7, 100], 1)         // [7]
//
// Run the tests: npm test -- 16-error-handling-and-debugging/other-debugging-tools

export function cheapestPrices(prices, count) {
    const sorted = [...prices].sort();
    return sorted.slice(0, count);
}
