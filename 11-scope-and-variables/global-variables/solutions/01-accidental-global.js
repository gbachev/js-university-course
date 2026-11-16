export function countItems(cart) {
    let count = 0;

    for (const line of cart) {
        count = count + line.quantity;
    }

    return count;
}
