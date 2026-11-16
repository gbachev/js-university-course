// A WeakMap uses the object itself as the key, and the entry goes with the object.
function memoizeByObject(fn) {
    const cache = new WeakMap();

    return (obj) => {
        if (cache.has(obj)) {
            return cache.get(obj);
        }
        const result = fn(obj);
        cache.set(obj, result);
        return result;
    };
}

let calls = 0;
const cartTotal = memoizeByObject((cart) => {
    calls++;
    return cart.items.reduce((sum, item) => sum + item.price, 0);
});

let cart = { items: [{ price: 25 }, { price: 9 }] };
console.log(cartTotal(cart)); // 34
console.log(cartTotal(cart)); // 34

cart = { items: [...cart.items, { price: 12 }] }; // a new object
console.log(cartTotal(cart)); // 46
console.log(calls); // 2
