// Map.groupBy() is from ES2024 (Node 21 and later, all current browsers).
const orders = [
    { id: 1, total: 40 },
    { id: 2, total: 250 },
    { id: 3, total: 90 },
];

const bySize = Map.groupBy(orders, (order) => order.total >= 100);

console.log(bySize.get(true)); // [ { id: 2, total: 250 } ]
console.log(bySize.get(false).length); // 2
