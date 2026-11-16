export function orderTotal(order) {
    let subtotal = 0;
    for (const line of order.lines) {
        subtotal = subtotal + line.price * line.quantity;
    }
    // Form values arrive as strings, so we convert the shipping before adding it.
    return subtotal + Number(order.shipping);
}
