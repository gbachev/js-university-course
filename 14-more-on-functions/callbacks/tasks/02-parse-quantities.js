// Task 2: The quantity field
// Lecture: Callback Functions
//
// The order form gives us the quantities as strings, one per line of the order.
// parseQuantities(values) should turn them into whole numbers, but our customers say
// the second line always shows NaN and the third one is wrong. Find out which
// arguments map() passes to parseInt and fix parseQuantities, so every value is read
// as a base 10 number. Keep map().
//
// Examples:
//   parseQuantities(['10', '10', '10'])    // [10, 10, 10]
//   parseQuantities(['3', '12', '7'])      // [3, 12, 7]
//
// Run the tests: npm test -- 14-more-on-functions/callbacks

export function parseQuantities(values) {
    return values.map(parseInt);
}
