import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { startCountdown } = await import(
    process.env.SOLUTIONS ? '../solutions/02-sale-countdown.js' : './02-sale-countdown.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function start(t, seconds) {
    const calls = [];
    t.mock.timers.enable({ apis: ['setInterval', 'setTimeout'] });
    startCountdown(
        seconds,
        (left) => calls.push(left),
        () => calls.push('done')
    );
    return calls;
}

test('the first tick comes after one second', (t) => {
    const calls = start(t, 3);
    t.mock.timers.tick(999);
    assert.deepEqual(calls, []);
    t.mock.timers.tick(1);
    assert.deepEqual(calls, [3]);
});

test('the ticks count down once per second', (t) => {
    const calls = start(t, 3);
    t.mock.timers.tick(3000);
    assert.deepEqual(calls, [3, 2, 1]);
});

test('onDone comes one second after the last tick', (t) => {
    const calls = start(t, 3);
    t.mock.timers.tick(4000);
    assert.deepEqual(calls, [3, 2, 1, 'done']);
});

test('nothing is called after onDone', (t) => {
    const calls = start(t, 2);
    t.mock.timers.tick(20000);
    assert.deepEqual(calls, [2, 1, 'done']);
});

test('a countdown from 0 only calls onDone, after one second', (t) => {
    const calls = start(t, 0);
    t.mock.timers.tick(1000);
    assert.deepEqual(calls, ['done']);
    t.mock.timers.tick(5000);
    assert.deepEqual(calls, ['done']);
});
