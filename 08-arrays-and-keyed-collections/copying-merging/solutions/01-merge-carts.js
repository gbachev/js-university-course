export function mergeCarts(guestCart, userCart) {
    return [...userCart, ...guestCart];
}
