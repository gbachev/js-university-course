// A simulated order lookup that fulfills or rejects.
const orders = { 1042: { id: 1042, total: 60 } };

function findOrder(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const order = orders[id];
            if (order) {
                resolve(order);
            } else {
                reject(new Error(`Order ${id} not found`));
            }
        }, 500);
    });
}

findOrder(1042).then((order) => {
    console.log(`Total: ${order.total} EUR`); // Total: 60 EUR
});

findOrder(7).catch((error) => {
    console.log(error.message); // Order 7 not found
});
