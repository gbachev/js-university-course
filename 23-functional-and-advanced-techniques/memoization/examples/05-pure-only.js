// Memoizing an impure function: the same coupon forever, and a lost order.
function memoize(fn) {
    const cache = new Map();

    return (arg) => {
        if (cache.has(arg)) {
            return cache.get(arg);
        }
        const result = fn(arg);
        cache.set(arg, result);
        return result;
    };
}

const couponCode = memoize((userId) => {
    return `SAVE-${Math.floor(Math.random() * 10_000)}`;
});
console.log(couponCode(1) === couponCode(1)); // true

const orders = [];
const placeOrder = memoize((title) => {
    orders.push(title);
    return orders.length;
});

placeOrder('Dune');
placeOrder('Dune');
console.log(orders); // [ 'Dune' ]
