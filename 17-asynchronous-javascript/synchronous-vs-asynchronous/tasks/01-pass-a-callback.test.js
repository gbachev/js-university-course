import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadOrder } = await import(
    process.env.SOLUTIONS ? '../solutions/01-pass-a-callback.js' : './01-pass-a-callback.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.

test('onLoaded gets the order after 300 ms', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const received = [];
    loadOrder(1042, (order) => received.push(order));
    t.mock.timers.tick(300);
    assert.deepEqual(received, [{ id: 1042, status: 'shipped' }]);
});

test('onLoaded is not called before the 300 ms are up', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const received = [];
    loadOrder(7, (order) => received.push(order));
    t.mock.timers.tick(299);
    assert.deepEqual(received, []);
});

test('each call gets its own order', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const received = [];
    loadOrder(1, (order) => received.push(order.id));
    loadOrder(2, (order) => received.push(order.id));
    t.mock.timers.tick(300);
    assert.deepEqual(received, [1, 2]);
});

test('loadOrder() itself returns undefined', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    assert.equal(loadOrder(1, () => {}), undefined);
});
