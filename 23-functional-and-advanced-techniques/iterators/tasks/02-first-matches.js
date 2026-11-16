// Task 2: The first few in stock
// Lecture: Iterators
//
// Our shop shows the first few books in stock out of a very long list. Write
// firstMatches(items, test, count): it returns an array of the first count items for
// which test(item) returns true, in their order. Use the iterator helpers, so the work
// stops as soon as we have count matches: test must not run on the items after the last
// match we need. With fewer matches, we get all of them, and a count of 0 gives [].
//
// Examples:
//   firstMatches(books, (book) => book.inStock, 2)    // the first two books in stock
//   firstMatches([5, 12, 8, 30], (n) => n > 10, 1)     // [12]
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/iterators

export function firstMatches(items, test, count) {
    // Your code here
}
