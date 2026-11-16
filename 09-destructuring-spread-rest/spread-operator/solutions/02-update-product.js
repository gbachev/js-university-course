export function updateProduct(product, changes) {
    // The id comes last, so no change can overwrite it.
    return { ...product, ...changes, id: product.id };
}
