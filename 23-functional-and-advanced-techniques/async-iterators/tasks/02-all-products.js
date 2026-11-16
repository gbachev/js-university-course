// Task 2: Every product, page by page
// Lecture: Async Iterators and for await...of
//
// Our shop API returns its products in pages. Write the async generator function
// allProducts(fetchPage). fetchPage(page) returns a promise of { items, hasMore } for page
// 1, 2 and so on. allProducts() yields the products one by one, as one flat list, and
// asks for the next page only after the loop has used every product of the one before.
// It stops after the page whose hasMore is false. A page may have no items. When the
// loop stops early, no further page is requested.
//
// Examples:
//   for await (const product of allProducts(fetchPage)) console.log(product);
//   await Array.fromAsync(allProducts(fetchPage))    // every product of every page
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/async-iterators

export async function* allProducts(fetchPage) {
    // Your code here
}
