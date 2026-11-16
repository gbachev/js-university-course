// Task 2: One total per cart
// Lecture: Memoization
//
// Our shop treats a cart as immutable: every change makes a new cart object. Write
// memoizeByObject(fn) for functions that take one object. It keeps the results in a
// WeakMap with the object itself as the key, so fn runs once per object and the entry
// goes away with its cart. Two different objects with the same content are two keys.
// An empty cart with a total of 0 is remembered like any other result, and a string or
// a number as the argument throws a TypeError, as the WeakMap does.
// Then build cartTotal with it: the sum of price * qty over cart.items.
//
// Examples:
//   const cart = { items: [{ price: 25, qty: 1 }, { price: 9, qty: 2 }] };
//   cartTotal(cart)    // 43, computed
//   cartTotal(cart)    // 43, from the cache
//
// Run the tests: npm test -- 23-functional-and-advanced-techniques/memoization

export function memoizeByObject(fn) {
    // Your code here
}

export const cartTotal = undefined; // Build it with memoizeByObject()
