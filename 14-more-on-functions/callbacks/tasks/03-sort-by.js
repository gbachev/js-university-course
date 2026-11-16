// Task 3: Sort by anything
// Lecture: Callback Functions
//
// Our shop sorts products by price, by stock, by rating, and each time someone writes
// a new comparator. Write sortBy(items, getValue): it returns a new array with the
// same item objects, sorted from the lowest to the highest number that the callback
// getValue gives for each item. getValue gets one item and returns a number. The
// items array itself must not change, and an empty array gives an empty array.
//
// Examples:
//   const products = [{ name: 'Lamp', price: 20 }, { name: 'Pen', price: 3 }];
//   sortBy(products, (product) => product.price)
//   // [{ name: 'Pen', price: 3 }, { name: 'Lamp', price: 20 }]
//
// Run the tests: npm test -- 14-more-on-functions/callbacks

export function sortBy(items, getValue) {
    // Your code here
}
