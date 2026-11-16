// A method passed straight to setTimeout() loses its object.
const cart = {
    items: 2,
    report() {
        console.log(`${this.items} items in the cart`);
    },
};

setTimeout(cart.report, 100); // undefined items in the cart
setTimeout(() => cart.report(), 100); // 2 items in the cart
setTimeout(cart.report.bind(cart), 100); // 2 items in the cart

// In Node, this inside the first callback is the Timeout object, which has no items.
