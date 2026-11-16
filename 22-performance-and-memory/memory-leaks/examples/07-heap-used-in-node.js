// Watching a leak grow in Node with process.memoryUsage().
// Run with: node --expose-gc 22-performance-and-memory/memory-leaks/examples/07-heap-used-in-node.js
// The number varies by machine and Node version.
if (typeof global.gc !== 'function') {
    console.log('Run this file with node --expose-gc');
    process.exit(0);
}

const heapMB = () =>
    Math.round(process.memoryUsage().heapUsed / 1024 / 1024);

const sessions = new Map();

function handleRequest(id) {
    sessions.set(id, { id, log: new Array(10_000).fill('ok') });
}

global.gc();
const before = heapMB();

for (let i = 0; i < 1000; i++) {
    handleRequest(i);
}

global.gc();
console.log(heapMB() - before); // 77
