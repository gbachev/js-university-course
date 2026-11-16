// Task 3: Items in the cart
// Lecture: The "for ... in" and "for ... of" loops
//
// The cart icon in our shop shows how many items the cart holds. The cart is an
// object: each key is a product and each value is its quantity. getTotalQuantity(cart)
// should add up the quantities, but it throws an error instead. Find out why and fix
// it, keeping a loop. An empty cart holds 0 items.
//
// Examples:
//   getTotalQuantity({ 'T-shirt': 2, Socks: 3 })   // 5
//   getTotalQuantity({})                           // 0
//
// Run the tests: npm test -- 05-control-flow/for-in-for-of

export function getTotalQuantity(cart) {
    let total = 0;

    for (const quantity of cart) {
        total += quantity;
    }

    return total;
}
