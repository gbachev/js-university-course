export function getOrderTotal(shipping, ...prices) {
    if (prices.length === 0) {
        return 0;
    }

    const itemsTotal = prices.reduce((total, price) => total + price, 0);

    return itemsTotal + shipping;
}
