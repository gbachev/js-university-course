export function correctLastPrice(prices, newPrice) {
    // Without this check, an empty list would get prices[-1] as a property.
    if (prices.length > 0) {
        prices[prices.length - 1] = newPrice;
    }

    return prices;
}
