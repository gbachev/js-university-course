// Task 3: Change the quantity
// Lecture: Pure Functions and Side Effects
//
// Each item in our cart is { name, price, quantity }. Write a pure function
// changeQuantity(cart, name, quantity): it returns a new cart where the item with
// that name has the new quantity. Nothing we pass in may change: not the cart, not
// its items array, not the item objects. Copy every level we change: the cart, the
// items array and the changed item. If no item has that name, return a new cart with
// the same items.
//
// Examples:
//   const cart = { owner: 'Jane Doe', items: [{ name: 'Pen', price: 3, quantity: 1 }] };
//   changeQuantity(cart, 'Pen', 4).items[0]    // { name: 'Pen', price: 3, quantity: 4 }
//   cart.items[0].quantity                     // 1
//
// Run the tests: npm test -- 14-more-on-functions/pure

export function changeQuantity(cart, name, quantity) {
    // Your code here
}
