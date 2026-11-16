// Task 1: A hidden internal ID
// Lecture: Symbol
//
// Our shop gives every product an internal ID that the product page must not show,
// and the page lists the product with Object.keys() and sends it with
// JSON.stringify(). Write addInternalId(product, id): it stores id in product under
// the key INTERNAL_ID, the symbol below, and returns the same product. Because the
// key is a symbol, Object.keys() and JSON.stringify() do not see the ID.
//
// Examples:
//   const book = addInternalId({ title: 'JS Basics' }, 1042);
//   book[INTERNAL_ID]      // 1042
//   Object.keys(book)      // ['title']
//
// Run the tests: npm test -- 06-types/symbol

export const INTERNAL_ID = Symbol('internal id');

export function addInternalId(product, id) {
    // Your code here
}
