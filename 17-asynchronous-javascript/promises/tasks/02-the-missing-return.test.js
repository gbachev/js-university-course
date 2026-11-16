import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getTotalWithVat } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-the-missing-return.js'
        : './02-the-missing-return.js'
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

test('the total of order 1042 with VAT is 72', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, getTotalWithVat(1042)), 72);
});

test('the total of order 1043 with VAT is 30', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, getTotalWithVat(1043)), 30);
});

test('an unknown order rejects with the error of findOrder()', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    await assert.rejects(settle(t, getTotalWithVat(7)), {
        message: 'Order 7 not found',
    });
});

test('the promise waits for addVat(), about 300 ms in all', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    let total = 'pending';
    getTotalWithVat(1042).then((value) => (total = value));
    for (let step = 0; step < 2; step++) {
        t.mock.timers.tick(100);
        await new Promise((resolve) => setImmediate(resolve));
    }
    assert.equal(total, 'pending');
    t.mock.timers.tick(100);
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(total, 72);
});
