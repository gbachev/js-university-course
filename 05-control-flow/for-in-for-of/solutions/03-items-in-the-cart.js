export function getTotalQuantity(cart) {
    let total = 0;

    // A plain object is not iterable, Object.values() gives us an array of its values.
    for (const quantity of Object.values(cart)) {
        total += quantity;
    }

    return total;
}
