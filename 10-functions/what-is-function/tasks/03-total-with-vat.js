// Task 3: Total with VAT
// Lecture: What is a Function?
//
// The cart needs the total of all its prices, with VAT. addVat(price) is already
// written below, so we do not repeat its logic. Write totalWithVat(prices): it adds up
// the prices in the array and returns the sum with VAT, by calling addVat(). An empty
// cart has a total of 0.
//
// Examples:
//   totalWithVat([10, 20])    // 36
//   totalWithVat([])          // 0
//
// Run the tests: npm test -- 10-functions/what-is-function

export function addVat(price) {
    return Math.round(price * 1.2 * 100) / 100;
}

export function totalWithVat(prices) {
    // Your code here
}
