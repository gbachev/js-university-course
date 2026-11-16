// Task 3: A price cache that lets products go
// Lecture: Garbage Collection
//
// A shop library gives us product objects, and working out a final price (tax, discounts)
// is slow. Write createPriceCache(calculate): it returns a function priceOf(product) that
// calls calculate(product) only the first time it sees that product object and returns
// the saved price after that. Keep the prices in a WeakMap, so the cache never keeps a
// product alive after the shop drops it. Two different objects with the same fields are
// two products, and each cache keeps its own prices. A product must be an object, like
// every WeakMap key: priceOf('lamp') throws a TypeError.
//
// Examples:
//   const priceOf = createPriceCache((product) => product.price * 1.2);
//   const lamp = { id: 1, price: 25 };
//   priceOf(lamp)   // 30, calculate runs
//   priceOf(lamp)   // 30, from the cache
//
// Run the tests: npm test -- 22-performance-and-memory/garbage-collection

export function createPriceCache(calculate) {
    // Your code here
}
