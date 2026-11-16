// Task 1: Find the typo
// Lecture: 'use strict'
//
// orderTotal(prices) adds up the prices of an order and returns the sum. Our file is a
// module, so it runs in strict mode, and the call throws a ReferenceError: one name in
// the loop has a typo. In sloppy mode the same typo would quietly create a global and
// the function would return 0. Read the error message, find the typo and fix it. An
// empty order has a total of 0.
//
// Examples:
//   orderTotal([20, 15, 5])   // 40
//   orderTotal([])            // 0
//
// Run the tests: npm test -- 11-scope-and-variables/use-strict

export function orderTotal(prices) {
    let total = 0;

    for (const price of prices) {
        totl = total + price;
    }

    return total;
}
