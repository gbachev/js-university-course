// Task 3: Search until we have enough
// Lecture: Async Iterators and for await...of
//
// Write the async function searchProducts(fetchPage, query, limit). fetchPage(page)
// works as in task 2: a promise of { items, hasMore }, where items are product names.
// searchProducts() returns a promise of an array with the first limit products whose
// name contains query, ignoring upper and lower case, in their order. It requests pages
// one at a time and stops requesting as soon as it has limit matches. When the pages run
// out first, it returns the matches it found, and a limit of 0 returns [] without a
// request. Write an async generator for the pages and loop over it with for await...of
// and a break.
//
// Examples:
//   await searchProducts(fetchPage, 'key', 1)    // ['Keyboard'], after one page
//   await searchProducts(fetchPage, 'xyz', 3)    // [], after every page
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/async-iterators

export async function searchProducts(fetchPage, query, limit) {
    // Your code here
}
