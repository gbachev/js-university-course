import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countCalls } = await import(
    process.env.SOLUTIONS ? '../solutions/02-count-calls.js' : './02-count-calls.js'
);

test('returns a function with calls set to 0', () => {
    const counted = countCalls(() => {});
    assert.equal(typeof counted, 'function');
    assert.equal(counted.calls, 0);
});

test('passes on the arguments and returns the result', () => {
    const countedTotal = countCalls((a, b) => a + b);
    assert.equal(countedTotal(10, 5), 15);
});

test('calls goes up by 1 on every call', () => {
    const counted = countCalls(() => 'ok');
    counted();
    counted();
    counted();
    assert.equal(counted.calls, 3);
});

test('each counted function keeps its own count', () => {
    const first = countCalls(() => 1);
    const second = countCalls(() => 2);
    first();
    first();
    second();
    assert.equal(first.calls, 2);
    assert.equal(second.calls, 1);
});
