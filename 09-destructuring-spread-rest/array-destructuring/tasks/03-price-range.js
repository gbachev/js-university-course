// Task 3: The price filter
// Lecture: Array Destructuring
//
// Our shop has a price filter with two boxes, "from" and "to". Some customers type the
// bigger price first. getPriceRange(minPrice, maxPrice) should return [min, max] with
// the smaller price first, whatever order they were typed in. A colleague tried to swap
// the two prices, but now both boxes end up with the same price. Fix the swap: one line
// of array destructuring does it without a temporary variable.
//
// Examples:
//   getPriceRange(10, 50)   // [10, 50]
//   getPriceRange(50, 10)   // [10, 50]
//
// Run the tests: npm test -- 09-destructuring-spread-rest/array-destructuring

export function getPriceRange(minPrice, maxPrice) {
    if (minPrice > maxPrice) {
        minPrice = maxPrice;
        maxPrice = minPrice;
    }

    return [minPrice, maxPrice];
}
