// Our own function that takes a callback: the callback decides what counts.
function countWhere(items, test) {
    let count = 0;
    for (const item of items) {
        if (test(item)) {
            count++;
        }
    }
    return count;
}

const orders = [
    { id: 1, total: 120, paid: true },
    { id: 2, total: 45, paid: false },
    { id: 3, total: 80, paid: true }
];

function isPaid(order) {
    return order.paid;
}

console.log(countWhere(orders, isPaid)); // 2
console.log(countWhere(orders, (order) => order.total > 100)); // 1
