export function getLastItem(cart) {
    // An empty cart gives cart[-1], which is undefined.
    return cart[cart.length - 1];
}
