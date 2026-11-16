// Task 2: The same product ID
// Lecture: Type Casting and Coercion
//
// The address of a product page gives us its ID as a string, like '42', and our cart
// stores the IDs as numbers. isSameProduct(idFromUrl, productId) uses == to compare
// them, and coercion makes it return true for '042', ' 42' and even '' with 0. Fix
// it: cast productId to a string with String() and compare the two strings with
// ===, so only the exact ID matches.
//
// Examples:
//   isSameProduct('42', 42)    // true
//   isSameProduct('042', 42)   // false
//   isSameProduct('', 0)       // false
//
// Run the tests: npm test -- 06-types/type-casting-and-conversions

export function isSameProduct(idFromUrl, productId) {
    return idFromUrl == productId;
}
