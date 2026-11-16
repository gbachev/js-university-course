export function getShippingCity(order) {
    return order.customer?.address?.city ?? 'Unknown';
}
