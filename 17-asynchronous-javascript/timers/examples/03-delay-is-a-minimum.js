// The timer runs out after 100 ms, but its callback waits for the busy loop.
function wait(ms) {
    const end = Date.now() + ms;
    while (Date.now() < end) {
        // keep the thread busy
    }
}

const start = Date.now();

setTimeout(() => {
    console.log(`Ran after ${Date.now() - start} ms`);
}, 100);

wait(1000);
console.log('Report generated');

// Report generated
// Ran after 1003 ms (a little over 1000)
