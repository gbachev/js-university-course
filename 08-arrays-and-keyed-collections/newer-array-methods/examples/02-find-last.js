const payments = [
    { id: 1, status: 'paid' },
    { id: 2, status: 'failed' },
    { id: 3, status: 'paid' },
    { id: 4, status: 'failed' },
    { id: 5, status: 'paid' }
];

const lastFailed = payments.findLast(p => p.status === 'failed');
console.log(lastFailed); // { id: 4, status: 'failed' }

const index = payments.findLastIndex(p => p.status === 'failed');
console.log(index); // 3

console.log(payments.findLast(p => p.status === 'refunded'));
// undefined
console.log(payments.findLastIndex(p => p.status === 'refunded'));
// -1
