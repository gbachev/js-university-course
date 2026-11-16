export function sortByPrice(products) {
    // Sort a copy, so the original array keeps its order.
    return [...products].sort((a, b) => a.price - b.price);
}
