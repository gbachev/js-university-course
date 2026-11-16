// Task 3: A shopping cart
// Lecture: Object Properties and Methods
//
// Finish the cart object that createCart() returns. Its items property maps a product
// name to a quantity, like { Socks: 2 }. add(product, quantity) adds the quantity to
// the product (a product that is already in the cart adds up), and remove(product)
// takes the product out of items. Both return this, so we can chain the calls. The
// getter totalItems gives the sum of all quantities, 0 for an empty cart.
//
// Examples:
//   createCart().add('Socks', 2).add('Hat', 1).totalItems         // 3
//   createCart().add('Socks', 2).remove('Socks').items            // {}
//   createCart().add('Socks', 2).add('Socks', 3).items.Socks      // 5
//
// Run the tests: npm test -- 07-objects/properties-methods

export function createCart() {
    return {
        items: {},
        add(product, quantity) {
            // Your code here
        },
        remove(product) {
            // Your code here
        },
        get totalItems() {
            // Your code here
        },
    };
}
