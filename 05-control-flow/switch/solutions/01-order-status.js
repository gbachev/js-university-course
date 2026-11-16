export function getOrderStatusMessage(status) {
    switch (status) {
        case 'pending':
            return 'We received your order.';
        case 'shipped':
            return 'Your order is on its way.';
        case 'delivered':
            return 'Your order has arrived.';
        default:
            return 'Unknown order status.';
    }
}
