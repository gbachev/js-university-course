const orders = { 1042: { id: 1042, total: 60 }, 1043: { id: 1043, total: 25 } };

export function findOrder(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = orders[id];
            if (order) {
                resolve(order);
            } else {
                reject(new Error(`Order ${id} not found`));
            }
        }, 200);
    });
}

export function addVat(total) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(total * 1.2), 100);
    });
}

export function getTotalWithVat(orderId) {
    return findOrder(orderId).then((order) => addVat(order.total));
}
