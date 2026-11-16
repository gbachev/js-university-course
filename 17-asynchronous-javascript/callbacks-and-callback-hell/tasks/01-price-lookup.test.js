import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getPrice } = await import(
    process.env.SOLUTIONS ? '../solutions/01-price-lookup.js' : './01-price-lookup.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function lookUp(t, id) {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const calls = [];
    getPrice(id, (...args) => calls.push(args));
    return calls;
}

test('a known book gets null and its price', (t) => {
    const calls = lookUp(t, 'book-1');
    t.mock.timers.tick(200);
    assert.deepEqual(calls, [[null, 25]]);
});

test('the answer comes after 200 ms, not before', (t) => {
    const calls = lookUp(t, 'book-2');
    t.mock.timers.tick(199);
    assert.deepEqual(calls, []);
    t.mock.timers.tick(1);
    assert.deepEqual(calls, [[null, 18]]);
});

test('an unknown book gets an Error as the first argument', (t) => {
    const calls = lookUp(t, 'book-9');
    t.mock.timers.tick(200);
    assert.equal(calls.length, 1);
    assert.ok(calls[0][0] instanceof Error);
    assert.equal(calls[0][0].message, 'No price for book-9');
});

test('the callback is called exactly once', (t) => {
    const calls = lookUp(t, 'book-9');
    t.mock.timers.tick(5000);
    assert.equal(calls.length, 1);
});
