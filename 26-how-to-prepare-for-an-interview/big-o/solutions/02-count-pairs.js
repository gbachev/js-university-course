export function countPairs(prices, budget) {
    // How many times we have seen each price so far.
    const seen = new Map();
    let pairs = 0;
    for (const price of prices) {
        pairs += seen.get(budget - price) ?? 0;
        seen.set(price, (seen.get(price) ?? 0) + 1);
    }
    return pairs;
}
