export function memoizeByObject(fn) {
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

export const cartTotal = memoizeByObject((cart) =>
    cart.items.reduce((sum, item) => sum + item.price * item.qty, 0),
);
