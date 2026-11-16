// The owner keeps changing the cart; other code gets a view it can only read.
function readOnly(target) {
    const refuse = () => {
        throw new TypeError('This cart view is read-only');
    };
    return new Proxy(target, {
        set: refuse,
        deleteProperty: refuse,
        defineProperty: refuse,
    });
}

const cart = { items: 2, total: 59.9 };
const cartView = readOnly(cart);

cart.items = 3;
console.log(cartView.items); // 3

try {
    cartView.total = 0;
} catch (error) {
    console.log(error.message); // This cart view is read-only
}
