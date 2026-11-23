import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { predictedOrder } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-predict-the-order.js'
        : './03-predict-the-order.js'
);
// The real order always comes from the unchanged placeOrder() of the solution, so
// changing the code to fit the prediction does not pass.
const { placeOrder } = await import('../solutions/03-predict-the-order.js');

// Runs placeOrder() and waits until its timer has fired too.
async function realOrder() {
    const labels = [];
    placeOrder((label) => labels.push(label));
    await new Promise((resolve) => setTimeout(resolve, 20));
    return labels;
}

test('the prediction has all 8 labels', () => {
    assert.equal(predictedOrder.length, 8);
});

test('the synchronous labels come first', () => {
    assert.deepEqual(predictedOrder.slice(0, 3), ['start', 'saving', 'end']);
});

test('the timer label comes last', () => {
    assert.equal(predictedOrder.at(-1), 'email sent');
});

test('the prediction matches the real order', async () => {
    assert.deepEqual(predictedOrder, await realOrder());
});
