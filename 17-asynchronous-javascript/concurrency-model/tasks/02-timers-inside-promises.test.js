import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { placeOrder, predictedOrder } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-timers-inside-promises.js'
        : './02-timers-inside-promises.js'
);

// A copy taken now, so changing the array while the code runs cannot pass the tests.
const prediction = [...predictedOrder];

// Runs placeOrder() and waits for a short timer of our own, which runs after its timers.
async function runPlaceOrder() {
    const logged = [];
    placeOrder((message) => logged.push(message));
    await new Promise((resolve) => setTimeout(resolve, 20));
    return logged;
}

test('the prediction has one entry for each message', async () => {
    const logged = await runPlaceOrder();
    assert.equal(prediction.length, logged.length);
});

test('the prediction uses the exact messages that placeOrder() logs', async () => {
    const logged = await runPlaceOrder();
    assert.deepEqual([...prediction].sort(), [...logged].sort());
});

test('the promise callback comes before every timer', async () => {
    const logged = await runPlaceOrder();
    assert.deepEqual(prediction.slice(0, 3), logged.slice(0, 3));
});

test('the prediction matches the order of the logs', async () => {
    const logged = await runPlaceOrder();
    assert.deepEqual(prediction, logged);
});
