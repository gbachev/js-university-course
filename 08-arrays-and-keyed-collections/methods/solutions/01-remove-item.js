export function removeItem(cart, product) {
    const index = cart.indexOf(product);

    // indexOf() gives -1 when the product is not there; 0 is a real position.
    if (index !== -1) {
        cart.splice(index, 1);
    }

    return cart;
}
