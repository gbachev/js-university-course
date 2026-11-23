export function filterOrders(orders, status) {
    if (status === 'all') {
        return orders;
    }
    return orders.filter((order) => order.status === status);
}

// Amounts are whole cents, so the sum stays exact.
export function totalCents(orders) {
    return orders.reduce((sum, order) => sum + order.amountCents, 0);
}
