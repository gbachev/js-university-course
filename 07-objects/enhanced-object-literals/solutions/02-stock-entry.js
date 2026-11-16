export function createStockEntry(productId, quantity) {
    return { ['sku-' + productId]: quantity };
}
