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

const cart = {
    id: 7,
    checkout: once(function () {
        console.log(`Charging cart ${this.id}`);
        return `order-${this.id}`;
    }),
};

console.log(cart.checkout());
// Charging cart 7
// order-7
console.log(cart.checkout()); // order-7
