export function getCartTotal(prices) {
    let total = 0;

    for (const price of prices) {
        total += price;
    }

    return total;
}
