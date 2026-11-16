// once() takes a function and returns a new one that runs it only the first time.
function once(fn) {
    let done = false;
    let result;
    return function(...args) {
        if (!done) {
            done = true;
            result = fn(...args);
        }
        return result;
    };
}

function placeOrder(cartId) {
    console.log(`Charging cart ${cartId}`);
    return `order-${cartId}`;
}

const placeOrderOnce = once(placeOrder);
console.log(placeOrderOnce(7));
// Charging cart 7
// order-7
console.log(placeOrderOnce(7)); // order-7
console.log(placeOrderOnce(8)); // order-7
