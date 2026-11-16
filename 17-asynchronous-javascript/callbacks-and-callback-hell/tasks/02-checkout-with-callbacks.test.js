import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { checkout } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-checkout-with-callbacks.js'
        : './02-checkout-with-callbacks.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function run(t, userId) {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const calls = [];
    checkout(userId, (...args) => calls.push(args));
    // Three steps of 100 ms, one after another.
    for (let time = 0; time < 1000; time += 100) {
        t.mock.timers.tick(100);
    }
    return calls;
}

test('a cart under 100 EUR is paid', (t) => {
    const calls = run(t, 1);
    assert.deepEqual(calls, [[null, { id: 'PAY-1042', total: 60 }]]);
});

test('a declined card ends the checkout with its error', (t) => {
    const calls = run(t, 2);
    assert.equal(calls.length, 1);
    assert.equal(calls[0][0].message, 'Card declined');
});

test('an unknown user ends the checkout with its error', (t) => {
    const calls = run(t, 9);
    assert.equal(calls.length, 1);
    assert.equal(calls[0][0].message, 'Unknown user: 9');
});

test('the three steps run one after another', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const calls = [];
    checkout(1, (...args) => calls.push(args));
    t.mock.timers.tick(100);
    t.mock.timers.tick(100);
    assert.deepEqual(calls, []);
    t.mock.timers.tick(100);
    assert.equal(calls.length, 1);
});
