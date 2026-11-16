// Task 2: The checkout label
// Lecture: The this Keyword
//
// At checkout we show a label like 'To pay: 45 EUR' for an order. An order has the
// price of its items, the shipping and a total() method that adds them up through
// this. checkoutLabel(order) should return the label, but it throws a TypeError: it
// stores the method in a variable and calls it on its own, so this is no longer the
// order. Fix checkoutLabel. Do not change createOrder.
//
// Examples:
//   checkoutLabel(createOrder(30, 15))   // 'To pay: 45 EUR'
//   checkoutLabel(createOrder(0, 0))     // 'To pay: 0 EUR'
//
// Run the tests: npm test -- 07-objects/this

export function createOrder(itemsPrice, shipping) {
    return {
        itemsPrice,
        shipping,
        total() {
            return this.itemsPrice + this.shipping;
        },
    };
}

export function checkoutLabel(order) {
    const total = order.total;
    return 'To pay: ' + total() + ' EUR';
}
