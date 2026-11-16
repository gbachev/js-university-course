import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { withFallback } = await import(
    process.env.SOLUTIONS ? '../solutions/03-cached-fallback.js' : './03-cached-fallback.js'
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

function later(value, ms) {
    return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

function failLater(message, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(message)), ms);
    });
}

test('a fast answer wins', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const live = later(['Express', 'Standard'], 100);
    assert.deepEqual(await settle(t, withFallback(live, 500, ['Standard'])), [
        'Express',
        'Standard',
    ]);
});

test('a slow answer gives the fallback', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const live = later(['Express', 'Standard'], 2000);
    assert.deepEqual(await settle(t, withFallback(live, 500, ['Standard'])), ['Standard']);
});

test('the fallback comes when the time is up, not later', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const live = later(['Express'], 2000);
    await settle(t, withFallback(live, 500, ['Standard']));
    assert.equal(Date.now(), 500);
});

test('an error before the time is up rejects with that error', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const live = failLater('Shipping service is down', 100);
    await assert.rejects(settle(t, withFallback(live, 500, ['Standard'])), {
        message: 'Shipping service is down',
    });
});

test('an error after the time is up is too late to matter', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const live = failLater('Shipping service is down', 1000);
    live.catch(() => {});
    assert.deepEqual(await settle(t, withFallback(live, 500, ['Standard'])), ['Standard']);
});
