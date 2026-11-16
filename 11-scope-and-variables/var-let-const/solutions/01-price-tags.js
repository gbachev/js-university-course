export function createPriceTags(prices) {
    const tags = [];

    // let gives every iteration its own i
    for (let i = 0; i < prices.length; i++) {
        tags.push(() => '$' + prices[i].toFixed(2));
    }

    return tags;
}
