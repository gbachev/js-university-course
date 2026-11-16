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
    // Called on the order, total() gets the order as its this.
    return 'To pay: ' + order.total() + ' EUR';
}
