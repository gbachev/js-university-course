export function cartTotal(items) {
    let total = 0;
    for (const item of items) {
        // A bundle adds the total of its own items, a product adds its price.
        total += item.items ? cartTotal(item.items) : item.price;
    }
    return total;
}
