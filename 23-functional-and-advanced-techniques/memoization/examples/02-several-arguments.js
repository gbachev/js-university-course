// One key for several arguments: JSON.stringify() by default, or our own toKey.
function memoizeByKey(fn, toKey = (args) => JSON.stringify(args)) {
    const cache = new Map();

    return (...args) => {
        const key = toKey(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

let calls = 0;
const shippingCost = memoizeByKey((weightKg, country) => {
    calls++;
    return country === 'BG' ? weightKg * 2 : weightKg * 5;
});

console.log(shippingCost(3, 'BG')); // 6
console.log(shippingCost(3, 'DE')); // 15
console.log(shippingCost(3, 'BG')); // 6
console.log(calls); // 2
