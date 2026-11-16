import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { payCart, charged } = await import(
    process.env.SOLUTIONS ? '../solutions/03-pay-the-cart.js' : './03-pay-the-cart.js'
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

test('payCart() returns a promise', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const result = payCart('c1');
    assert.ok(result instanceof Promise);
    result.catch(() => {});
});

test('a cart of 60 EUR is paid', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(await settle(t, payCart('c1')), 'Paid 60 EUR with PAY-1042');
});

test('a cart under 30 EUR rejects and the card is not charged', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    charged.length = 0;
    await assert.rejects(settle(t, payCart('c2')), {
        message: 'Minimum order is 30 EUR',
    });
    assert.deepEqual(charged, []);
});

test('a declined card rejects with its error', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    await assert.rejects(settle(t, payCart('c3')), { message: 'Card declined' });
});

test('an unknown cart rejects with its error', async (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    await assert.rejects(settle(t, payCart('c9')), { message: 'Cart c9 not found' });
});
