import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getOrderSummary } = await import(
    process.env.SOLUTIONS ? '../solutions/01-order-summary.js' : './01-order-summary.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
// settle() moves the clock 100 ms at a time (the delays here are multiples of
// 100 ms) and lets the promise callbacks run in between, until the promise
// settles. Then we await it as usual.
async function settle(t, value) {
    const promise = Promise.resolve(value);
    let settled = false;
    promise.then(
        () => (settled = true),
        () => (settled = true)
    );
    await new Promise((resolve) => setImmediate(resolve));
    for (let step = 0; step < 100 && !settled; step++) {
        t.mock.timers.tick(100);
        await new Promise((resolve) => setImmediate(resolve));
    }
    return promise;
}

test('getOrderSummary() returns a promise', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.ok(getOrderSummary(1042) instanceof Promise);
});

test('the summary has the customer name and the order total', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, getOrderSummary(1042)), 'Jane Doe: 60 EUR');
});

test('the customer is loaded after the order, about 300 ms in all', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    await settle(t, getOrderSummary(1042));
    assert.equal(Date.now(), 300);
});

test('an unknown order gives the fallback text', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, getOrderSummary(7)), 'Order 7 is not available');
});

test('a missing customer gives the fallback text', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, getOrderSummary(1043)), 'Order 1043 is not available');
});
