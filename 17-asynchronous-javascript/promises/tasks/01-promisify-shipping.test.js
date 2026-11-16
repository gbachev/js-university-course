import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getShippingQuoteAsync } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-promisify-shipping.js'
        : './01-promisify-shipping.js'
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

test('getShippingQuoteAsync() returns a promise', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.ok(getShippingQuoteAsync('BG') instanceof Promise);
});

test('the promise fulfills with the price', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, getShippingQuoteAsync('BG')), 4.99);
    assert.equal(await settle(t, getShippingQuoteAsync('DE')), 7.5);
});

test('a country we do not ship to rejects with the Error', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    await assert.rejects(settle(t, getShippingQuoteAsync('JP')), {
        name: 'Error',
        message: 'No shipping to JP',
    });
});

test('the promise waits for the 300 ms of the quote', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    let price;
    getShippingQuoteAsync('FR').then((value) => (price = value));
    t.mock.timers.tick(299);
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(price, undefined);
    t.mock.timers.tick(1);
    await new Promise((resolve) => setImmediate(resolve));
    assert.equal(price, 6.9);
});
