export function orderTotal(shipping, ...prices) {
    const total = prices.reduce((sum, price) => sum + price, shipping);
    return Math.round(total * 100) / 100;
}
