export function cheapestPrices(prices, count) {
    // Without a compare function, sort() compares the numbers as strings.
    const sorted = [...prices].sort((a, b) => a - b);
    return sorted.slice(0, count);
}
