// Array.fromAsync collects an async iterable into an array, with an optional mapping.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function* orderUpdates() {
    await wait(100);
    yield 'placed';
    await wait(100);
    yield 'shipped';
}

const updates = await Array.fromAsync(orderUpdates());
console.log(updates); // [ 'placed', 'shipped' ]

const labels = await Array.fromAsync(
    orderUpdates(),
    (status) => status.toUpperCase(),
);
console.log(labels); // [ 'PLACED', 'SHIPPED' ]
