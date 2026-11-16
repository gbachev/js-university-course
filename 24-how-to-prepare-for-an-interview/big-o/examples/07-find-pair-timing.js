// Times both versions on lists with no matching pair, the worst case.
// The times differ by machine and by run: compare how they grow when n grows ten times.
function findPairSlow(prices, budget) {
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] + prices[j] === budget) {
                return [prices[i], prices[j]];
            }
        }
    }
    return null;
}

function findPair(prices, budget) {
    const seen = new Set();
    for (const price of prices) {
        const needed = budget - price;
        if (seen.has(needed)) {
            return [needed, price];
        }
        seen.add(price);
    }
    return null;
}

function time(label, fn) {
    const start = performance.now();
    fn();
    console.log(`${label}: ${(performance.now() - start).toFixed(1)} ms`);
}

for (const size of [5000, 50000]) {
    // Every price is at least 1, so no two of them add up to a budget of 1.
    const prices = Array.from({ length: size }, (_, i) => i + 1);
    time(`nested loops, ${size} prices`, () => findPairSlow(prices, 1));
    time(`Set, ${size} prices`, () => findPair(prices, 1));
}
