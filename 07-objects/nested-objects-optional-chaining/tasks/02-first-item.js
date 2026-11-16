// Task 2: The first item
// Lecture: Nested Objects and Optional Chaining
//
// The order list of our shop shows the name of the first item of every order. Orders
// look like { id: 1, items: [{ name: 'Hat', price: 15 }] }. getFirstItemName(order)
// works for most orders, but the page crashes on an order that has no items property
// yet (or has items set to null), and on an order whose items array is empty. Fix it
// with optional chaining: in all these cases it returns undefined instead of throwing.
//
// Examples:
//   getFirstItemName({ id: 1, items: [{ name: 'Hat', price: 15 }] })   // 'Hat'
//   getFirstItemName({ id: 2 })                                       // undefined
//   getFirstItemName({ id: 3, items: [] })                            // undefined
//
// Run the tests: npm test -- 07-objects/nested-objects-optional-chaining

export function getFirstItemName(order) {
    return order.items[0].name;
}
