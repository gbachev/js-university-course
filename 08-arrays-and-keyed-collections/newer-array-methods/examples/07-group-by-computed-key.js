const orders = [
    { id: 1, total: 120 },
    { id: 2, total: 35 },
    { id: 3, total: 80 }
];

const bySize = Object.groupBy(orders, order =>
    order.total >= 50 ? 'large' : 'small'
);

console.log(bySize.large.length); // 2
console.log(Object.hasOwn(bySize, 'small')); // true

try {
    bySize.hasOwnProperty('small');
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: bySize.hasOwnProperty is not a function
}
