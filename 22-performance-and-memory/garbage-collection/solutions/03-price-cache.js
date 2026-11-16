export function createPriceCache(calculate) {
    const prices = new WeakMap();

    return function priceOf(product) {
        if (!prices.has(product)) {
            prices.set(product, calculate(product));
        }
        return prices.get(product);
    };
}
