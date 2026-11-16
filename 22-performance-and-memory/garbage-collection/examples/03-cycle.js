// Mark-and-sweep frees a cycle once no root reaches it.
// Run with: node --expose-gc 22-performance-and-memory/garbage-collection/examples/03-cycle.js
// The exact numbers vary between machines and Node versions.
if (typeof global.gc !== 'function') {
    console.log('Run this file with node --expose-gc');
    process.exit(0);
}

const heapMB = () =>
    Math.round(process.memoryUsage().heapUsed / 1024 / 1024);

function createOrder() {
    const order = { lines: new Array(5_000_000).fill(0) };
    const invoice = { order };
    order.invoice = invoice; // order and invoice point at each other
    return order;
}

let order = createOrder();
global.gc();
console.log(heapMB()); // 41

order = null;
global.gc();
console.log(heapMB()); // 3
