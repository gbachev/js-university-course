function once(fn) {
    let called = false;
    let result;
    return function (...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}

const placeOrder = once((orderId) => {
    console.log(`Order ${orderId} placed`);
    return orderId;
});

console.log(placeOrder(42));
// Order 42 placed
// 42
console.log(placeOrder(43)); // 42
