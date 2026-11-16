import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { once, payments } = await import(
    process.env.SOLUTIONS ? '../solutions/03-call-it-once.js' : './03-call-it-once.js'
);

test('once() returns a function', () => {
    assert.equal(typeof once(() => {}), 'function');
});

test('the first call passes every argument on', () => {
    const calls = [];
    const report = once((...args) => calls.push(args));
    report(null, 'PAY-1042', 60);
    assert.deepEqual(calls, [[null, 'PAY-1042', 60]]);
});

test('every call after the first is ignored', () => {
    const calls = [];
    const report = once((...args) => calls.push(args));
    report(null, 'PAY-1');
    report(null, 'PAY-2');
    report(new Error('Late error'));
    assert.deepEqual(calls, [[null, 'PAY-1']]);
});

test('two wrapped callbacks do not share their state', () => {
    const calls = [];
    const first = once((id) => calls.push(id));
    const second = once((id) => calls.push(id));
    first('A');
    second('B');
    assert.deepEqual(calls, ['A', 'B']);
});

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
test('the buggy library sends only one receipt email', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const emails = [];
    payments.charge(
        60,
        once((error, paymentId) => emails.push(`Receipt for ${paymentId}`))
    );
    t.mock.timers.tick(100);
    t.mock.timers.tick(100);
    assert.deepEqual(emails, ['Receipt for PAY-1042']);
});
