export function discountedPrices(prices, discount) {
    const result = [];

    for (const price of prices) {
        // a new name, so the discount parameter stays as it is for the next price
        let rate = discount;
        if (price > 100) {
            rate = 0.2;
        }
        result.push(price - price * rate);
    }

    return result;
}
