const orders = {
    1042: { id: 1042, customerId: 1, total: 60 },
    1043: { id: 1043, customerId: 9, total: 25 },
};
const customers = { 1: { id: 1, name: 'Jane Doe' } };

export function findOrder(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orders[id]) {
                resolve(orders[id]);
            } else {
                reject(new Error(`Order ${id} not found`));
            }
        }, 200);
    });
}

export function findCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (customers[id]) {
                resolve(customers[id]);
            } else {
                reject(new Error(`Customer ${id} not found`));
            }
        }, 100);
    });
}

export async function getOrderSummary(orderId) {
    try {
        const order = await findOrder(orderId);
        const customer = await findCustomer(order.customerId);
        return `${customer.name}: ${order.total} EUR`;
    } catch (error) {
        return `Order ${orderId} is not available`;
    }
}
