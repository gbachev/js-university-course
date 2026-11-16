import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { openCart, predictedOrder } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-order-of-the-logs.js'
        : './01-order-of-the-logs.js'
);

// A copy taken now, so changing the array while the code runs cannot pass the tests.
const prediction = [...predictedOrder];

// Runs openCart() and waits for a short timer of our own, which runs after its timer.
async function runOpenCart() {
    const logged = [];
    openCart((message) => logged.push(message));
    await new Promise((resolve) => setTimeout(resolve, 20));
    return logged;
}

test('the prediction has one entry for each message', async () => {
    const logged = await runOpenCart();
    assert.equal(prediction.length, logged.length);
});

test('the prediction uses the exact messages that openCart() logs', async () => {
    const logged = await runOpenCart();
    assert.deepEqual([...prediction].sort(), [...logged].sort());
});

test('the prediction starts with the two lines of the script', async () => {
    const logged = await runOpenCart();
    assert.deepEqual(prediction.slice(0, 2), logged.slice(0, 2));
});

test('the prediction matches the order of the logs', async () => {
    const logged = await runOpenCart();
    assert.deepEqual(prediction, logged);
});
