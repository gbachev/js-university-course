// Task 2: Remove without breaking the old cart
// Lecture: Pure Functions and Side Effects
//
// removeItem(cart, name) takes the item with that name out of the cart. It works, but
// it changes the cart we pass in: the order history screen still holds the old cart
// and now shows it without the item. Make removeItem pure: it returns a new cart,
// with a new items array without that item, and leaves the old cart and its items
// array as they were. An unknown name gives a new cart with the same items.
//
// Examples:
//   const cart = { owner: 'Jane Doe', items: [{ name: 'Pen', price: 3 }] };
//   const updated = removeItem(cart, 'Pen');
//   updated.items          // []
//   cart.items.length      // 1
//
// Run the tests: npm test -- 14-more-on-functions/pure

export function removeItem(cart, name) {
    const index = cart.items.findIndex((item) => item.name === name);
    if (index !== -1) {
        cart.items.splice(index, 1);
    }
    return cart;
}
