// Task 2: Correct the last price
// Lecture: Accessing and Modifying Array Elements
//
// The checkout keeps the prices of the scanned products in an array. When the cashier
// corrects a price, it is always the last one scanned. The function
// correctLastPrice(prices, newPrice) should replace the last element with newPrice and
// return the array. Right now it writes to index -1, which adds a property instead of
// changing an element, so the last price stays wrong. Fix it. An empty list has no last
// price: it stays empty.
//
// Examples:
//   correctLastPrice([2.5, 4, 10], 1)   // [ 2.5, 4, 1 ]
//   correctLastPrice([], 1)             // []
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/access-modify

export function correctLastPrice(prices, newPrice) {
    prices[-1] = newPrice;
    return prices;
}
