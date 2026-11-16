export function cartTotal(prices) {
    let total = 0;

    for (const price of prices) {
        total = total + price;
    }

    return total;
}
