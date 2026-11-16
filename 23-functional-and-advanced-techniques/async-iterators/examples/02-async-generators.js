// An async generator can await and yield in the same body.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function* orderUpdates() {
    await wait(100);
    yield 'Order placed';
    await wait(100);
    yield 'Order shipped';
    await wait(100);
    yield 'Order delivered';
}

const updates = orderUpdates();
console.log(typeof updates[Symbol.asyncIterator]); // function
console.log(await updates.next());
// { value: 'Order placed', done: false }

for await (const update of updates) {
    console.log(update);
}
// Order shipped
// Order delivered
