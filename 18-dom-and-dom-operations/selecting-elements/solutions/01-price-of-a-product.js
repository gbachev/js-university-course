export function priceOf(productId) {
    const product = document.querySelector(`[data-product-id="${productId}"]`);
    return product ? Number(product.dataset.price) : null;
}
