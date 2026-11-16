import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { logCalls } = await import(
    process.env.SOLUTIONS ? '../solutions/02-log-calls.js' : './02-log-calls.js'
);

function addToCart(product) {
    return `${product} added`;
}

function cartTotal(a, b) {
    return a + b;
}

test('returns the result of the wrapped function', () => {
    const add = logCalls(addToCart, []);
    assert.equal(add('Book'), 'Book added');
});

test('logs the name and the arguments of a call', () => {
    const log = [];
    logCalls(addToCart, log)('Book');
    assert.deepEqual(log, [{ name: 'addToCart', args: ['Book'] }]);
});

test('logs every call, in order, with all its arguments', () => {
    const log = [];
    const total = logCalls(cartTotal, log);
    assert.equal(total(10, 5), 15);
    total(1, 2);
    assert.deepEqual(log, [
        { name: 'cartTotal', args: [10, 5] },
        { name: 'cartTotal', args: [1, 2] },
    ]);
});

test('a call with no arguments logs an empty args array', () => {
    const log = [];
    logCalls(function clearCart() {}, log)();
    assert.deepEqual(log, [{ name: 'clearCart', args: [] }]);
});

test('two wrapped functions can share one log', () => {
    const log = [];
    logCalls(addToCart, log)('Pen');
    logCalls(cartTotal, log)(2, 3);
    assert.deepEqual(log.map((entry) => entry.name), ['addToCart', 'cartTotal']);
});
