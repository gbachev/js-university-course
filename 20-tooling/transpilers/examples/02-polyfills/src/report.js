export function groupOrders(orders) {
    return Object.groupBy(orders, (order) => order.status);
}
