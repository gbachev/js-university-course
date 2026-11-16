export function addVat(price) {
    return Math.round(price * 1.2 * 100) / 100;
}

export function totalWithVat(prices) {
    let sum = 0;

    for (const price of prices) {
        sum += price;
    }

    return addVat(sum);
}
