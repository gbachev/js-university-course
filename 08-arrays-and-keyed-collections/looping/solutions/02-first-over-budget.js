export function findFirstOverBudget(prices, budget) {
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > budget) {
            // return ends the loop and the function at once.
            return i;
        }
    }

    return -1;
}
