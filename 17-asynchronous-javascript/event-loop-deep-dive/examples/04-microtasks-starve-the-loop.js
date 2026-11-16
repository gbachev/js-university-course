// A microtask that queues itself again keeps a due timer waiting for a whole second.
const start = Date.now();

setTimeout(() => {
    console.log(`Timer ran after ${Date.now() - start} ms`);
}, 0);

function checkStock() {
    if (Date.now() - start < 1000) {
        queueMicrotask(checkStock);
    }
}

checkStock();

// Timer ran after 1000 ms
