import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { retry } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-retry-with-backoff.js'
        : './03-retry-with-backoff.js'
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

// A fake payment service that fails the first few calls and then works.
// It remembers the fake time of every call.
function flakyService(failures) {
    const service = { calls: [] };
    service.charge = () => {
        service.calls.push(Date.now());
        if (service.calls.length <= failures) {
            const call = service.calls.length;
            return Promise.reject(new Error(`Service busy (call ${call})`));
        }
        return Promise.resolve({ id: 'PAY-1042' });
    };
    return service;
}

test('a call that works at once is made only once', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const service = flakyService(0);
    assert.deepEqual(await settle(t, retry(service.charge, 3, 100)), { id: 'PAY-1042' });
    assert.deepEqual(service.calls, [0]);
});

test('after two failures the third call works', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const service = flakyService(2);
    assert.deepEqual(await settle(t, retry(service.charge, 3, 100)), { id: 'PAY-1042' });
    assert.equal(service.calls.length, 3);
});

test('each wait is twice as long as the one before', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const service = flakyService(3);
    await settle(t, retry(service.charge, 4, 100));
    // calls at 0, then after 100, 200 and 400 ms of waiting
    assert.deepEqual(service.calls, [0, 100, 300, 700]);
});

test('when every call fails, it rejects with the last error', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const service = flakyService(10);
    await assert.rejects(settle(t, retry(service.charge, 3, 100)), {
        message: 'Service busy (call 3)',
    });
    assert.equal(service.calls.length, 3);
});

test('there is no wait after the last failed call', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout', 'Date'] });
    const service = flakyService(10);
    await settle(t, retry(service.charge, 2, 100)).catch(() => {});
    assert.equal(Date.now(), 100);
});
