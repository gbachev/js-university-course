import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadProductPage } = await import(
    process.env.SOLUTIONS ? '../solutions/01-product-page.js' : './01-product-page.js'
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

test('the page has the title, the average rating and the stock', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.deepEqual(await settle(t, loadProductPage(7)), {
        title: 'Clean Code',
        rating: 4,
        stock: 12,
    });
});

test('the page is ready after 300 ms, the time of the slowest request', async (t) => {
    // The fake clock of Date starts at 0 and moves with the fake timers.
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    await settle(t, loadProductPage(7));
    assert.equal(Date.now(), 300);
});

test('the page is not ready before 300 ms', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    let page = 'pending';
    loadProductPage(7).then((result) => (page = result));
    for (let step = 0; step < 2; step++) {
        t.mock.timers.tick(100);
        await new Promise((resolve) => setImmediate(resolve));
    }
    assert.equal(page, 'pending');
});
