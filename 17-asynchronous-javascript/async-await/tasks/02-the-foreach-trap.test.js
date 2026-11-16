import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { cartTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-the-foreach-trap.js' : './02-the-foreach-trap.js'
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

test('the total adds up the price of every book', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, cartTotal(['book-1', 'book-2', 'book-3'])), 75);
});

test('one book costs its own price', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, cartTotal(['book-2'])), 18);
});

test('an empty cart costs 0', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, cartTotal([])), 0);
});

test('the prices load at the same time, about 300 ms in all', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const total = await settle(t, cartTotal(['book-1', 'book-2', 'book-3']));
    assert.equal(total, 75);
    assert.equal(Date.now(), 300);
});
