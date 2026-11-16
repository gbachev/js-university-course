export function mapPrices(prices, convert) {
    const result = [];
    for (let index = 0; index < prices.length; index++) {
        result.push(convert(prices[index], index));
    }
    return result;
}
