export function formatTotal(cart) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return `Total: ${total.toFixed(2)} EUR`;
}

export function renderTotal(cart) {
    document.title = formatTotal(cart);
}
