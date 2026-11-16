// Task 2: The bundle total
// Lecture: Recursive Functions
//
// Our cart can hold products and bundles. A product is { name, price }. A bundle is
// { name, items } and has no price of its own: it costs what its items cost, and its
// items can be products or more bundles, as deep as the shop likes. Write
// cartTotal(items): it returns the total price of the list, counting every product at
// every level. An empty list, or a bundle with no items, costs 0.
//
// Examples:
//   cartTotal([{ name: 'Pen', price: 3 }])    // 3
//   cartTotal([
//       { name: 'Pen', price: 3 },
//       { name: 'Desk set', items: [{ name: 'Lamp', price: 20 }] },
//   ])                                        // 23
//
// Run the tests: npm test -- 14-more-on-functions/recursive

export function cartTotal(items) {
    // Your code here
}
