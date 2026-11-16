export function ordersByMonth(orders) {
    return Object.groupBy(orders, order => order.date.slice(0, 7));
}

export function monthTotal(orders, month) {
    const monthOrders = ordersByMonth(orders)[month] ?? [];
    return monthOrders.reduce((sum, order) => sum + order.total, 0);
}
