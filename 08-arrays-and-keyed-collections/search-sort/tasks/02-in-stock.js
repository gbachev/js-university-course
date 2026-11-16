// Task 2: Is it in stock?
// Lecture: Searching and Sorting Arrays
//
// The shop keeps the names of the products in stock in an array. The function
// isInStock(stock, product) should return true when the product is in the array and
// false when it is not. A colleague wrote it with indexOf(), and now the first product
// of the list is reported as missing while products we do not have are reported as in
// stock. Fix it.
//
// Examples:
//   isInStock(['lamp', 'desk', 'chair'], 'lamp')   // true
//   isInStock(['lamp', 'desk', 'chair'], 'sofa')   // false
//
// Run the tests: npm test -- 08-arrays-and-keyed-collections/search-sort

export function isInStock(stock, product) {
    const index = stock.indexOf(product);

    if (index) {
        return true;
    } else {
        return false;
    }
}
