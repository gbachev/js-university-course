// Empties arrays of two sizes with shift() and with pop(), and prints how long it took.
// The times differ by machine and by run: compare how they grow, not the numbers.
function timeEmptying(size, method) {
    const items = Array.from({ length: size }, (_, i) => i);
    const start = performance.now();
    while (items.length > 0) {
        items[method]();
    }
    return performance.now() - start;
}

for (const size of [10000, 100000]) {
    for (const method of ['shift', 'pop']) {
        const ms = timeEmptying(size, method);
        console.log(`${method}() on ${size} items: ${ms.toFixed(1)} ms`);
    }
}
