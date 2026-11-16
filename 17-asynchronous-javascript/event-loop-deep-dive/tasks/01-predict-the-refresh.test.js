import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { refreshCart, predictedOrder } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-predict-the-refresh.js'
        : './01-predict-the-refresh.js'
);

// A copy taken now, so changing the array while the code runs cannot pass the tests.
const prediction = [...predictedOrder];

// Runs refreshCart() and waits for a short timer of our own, which runs after its timer.
async function runRefresh() {
    const logged = [];
    refreshCart((message) => logged.push(message));
    await new Promise((resolve) => setTimeout(resolve, 20));
    return logged;
}

test('the prediction has one entry for each message', async () => {
    const logged = await runRefresh();
    assert.equal(prediction.length, logged.length);
});

test('the prediction uses the exact messages that refreshCart() logs', async () => {
    const logged = await runRefresh();
    assert.deepEqual([...prediction].sort(), [...logged].sort());
});

test('the prediction starts with the two synchronous lines', async () => {
    const logged = await runRefresh();
    assert.deepEqual(prediction.slice(0, 2), logged.slice(0, 2));
});

test('the prediction matches the order of the logs', async () => {
    const logged = await runRefresh();
    assert.deepEqual(prediction, logged);
});
