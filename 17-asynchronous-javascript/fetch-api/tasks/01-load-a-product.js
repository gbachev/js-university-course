// Task 1: Load a product
// Lecture: The Fetch API
//
// Write the async function loadProduct(id). It sends a GET request with fetch() to
// https://shop.example/api/products/<id> and returns the product parsed from the
// JSON body. fetch() does not reject on HTTP errors, so check response.ok: for a 404,
// throw an Error 'Product <id> not found'; for any other failed status, throw an
// Error 'Request failed with status <status>'. A network error (fetch() rejects)
// passes through as it is. The tests replace fetch() with a fake, so no request
// leaves our machine.
//
// Examples:
//   await loadProduct(7)    // { id: 7, title: 'Clean Code', price: 35 }
//   await loadProduct(99)   // throws Error: Product 99 not found
//
// Run the tests: npm test -- 17-asynchronous-javascript/fetch-api

export async function loadProduct(id) {
    // Your code here
}
