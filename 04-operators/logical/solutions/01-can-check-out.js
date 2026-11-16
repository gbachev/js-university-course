export function canCheckout(isLoggedIn, itemsInCart) {
    return isLoggedIn && itemsInCart > 0;
}
