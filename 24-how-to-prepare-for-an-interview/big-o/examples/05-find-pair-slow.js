// O(n²) time, O(1) extra space: every pair is checked.
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

const prices = [12, 25, 8, 30, 20];
console.log(findPairSlow(prices, 50)); // [30, 20]
console.log(findPairSlow(prices, 100)); // null
