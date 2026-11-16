export function countByStatus(orders) {
    return orders.reduce((counts, order) => {
        // The first order with a status finds no count yet, so we start from 0.
        counts[order.status] = (counts[order.status] || 0) + 1;
        return counts;
    }, {});
}
