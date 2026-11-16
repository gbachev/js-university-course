// console.table() prints an array of objects as a table. A second argument picks the columns.
const orders = [
    { id: 101, customer: 'John Doe', total: 59.9 },
    { id: 102, customer: 'Jane Doe', total: 120 },
];

console.table(orders, ['customer', 'total']);
// ┌─────────┬────────────┬───────┐
// │ (index) │ customer   │ total │
// ├─────────┼────────────┼───────┤
// │ 0       │ 'John Doe' │ 59.9  │
// │ 1       │ 'Jane Doe' │ 120   │
// └─────────┴────────────┴───────┘
