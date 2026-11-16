// Task 2: Page size
// Lecture: Nullish Coalescing
//
// Our product list shows a number of products per page. Write
// getPageSize(urlPageSize, savedPageSize): it returns the page size from the URL when
// there is one, else the page size the user saved, else 20. "There is one" means the
// value is not null or undefined. A page size of 0 is a valid choice here: it means
// "show all products", so 0 must not be replaced.
//
// Examples:
//   getPageSize(50, 10)                  // 50
//   getPageSize(undefined, 10)           // 10
//   getPageSize(undefined, undefined)    // 20
//   getPageSize(0, 10)                   // 0
//
// Run the tests: npm test -- 04-operators/nullish-coalescing

export function getPageSize(urlPageSize, savedPageSize) {
    // Your code here
}
