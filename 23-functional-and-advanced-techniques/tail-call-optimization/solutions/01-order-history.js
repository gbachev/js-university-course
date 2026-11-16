export function historyTotal(order) {
    let total = 0;
    while (order !== null) {
        total = total + order.total;
        order = order.previous;
    }
    return total;
}
