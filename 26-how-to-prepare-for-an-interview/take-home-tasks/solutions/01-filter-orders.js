export const STATUSES = ['paid', 'shipped', 'cancelled'];

export function filterOrders(orders, status) {
    if (status !== 'all' && !STATUSES.includes(status)) {
        throw new Error(`Unknown status: ${status}`);
    }
    const list = orders ?? [];
    if (status === 'all') {
        return list;
    }
    return list.filter((order) => order.status === status);
}
