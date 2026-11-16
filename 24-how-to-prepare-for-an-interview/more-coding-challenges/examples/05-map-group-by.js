const orders = [
    { id: 1, status: 'paid' },
    { id: 2, status: 'shipped' },
    { id: 3, status: 'paid' },
];

const byStatus = Map.groupBy(orders, (order) => order.status);
console.log(byStatus.get('paid').map((order) => order.id)); // [1, 3]
console.log([...byStatus.keys()]); // ['paid', 'shipped']
