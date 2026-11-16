// Promise.race() as a timeout. The loser keeps running: Node waits the full 2 seconds.
function later(value, ms) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), ms);
    });
}

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timed out after ${ms} ms`));
        }, ms);
    });
}

function withTimeout(promise, ms) {
    return Promise.race([promise, timeout(ms)]);
}

withTimeout(later('Shipping options', 100), 500)
    .then((result) => console.log(result)); // Shipping options

withTimeout(later('Order history', 2000), 500)
    .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
// Timed out after 500 ms
