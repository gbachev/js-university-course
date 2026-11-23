// O(n) time, O(n) extra space: a Set remembers the prices we have seen.
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

const prices = [12, 25, 8, 30, 20];
console.log(findPair(prices, 50)); // [30, 20]
console.log(findPair(prices, 100)); // null
console.log(findPair([25], 50)); // null
