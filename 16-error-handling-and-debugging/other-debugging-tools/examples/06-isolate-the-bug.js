// The two biggest orders come out wrong, so we check each step on its own.
function topOrders(orders) {
    const totals = orders.map((order) => order.total);
    return totals.sort().reverse().slice(0, 2);
}

const orders = [{ total: 8 }, { total: 120 }, { total: 59.9 }];
console.log(topOrders(orders)); // [ 8, 59.9 ]

console.log(orders.map((order) => order.total)); // [ 8, 120, 59.9 ]
console.log([8, 120, 59.9].sort()); // [ 120, 59.9, 8 ]
console.log([8, 120, 59.9].sort((a, b) => b - a)); // [ 120, 59.9, 8 ]
