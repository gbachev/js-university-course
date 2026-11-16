export function productIdOf(button) {
    // closest() walks up through the ancestors, however deep the button sits.
    const product = button.closest('[data-product-id]');
    return product ? product.dataset.productId : null;
}
