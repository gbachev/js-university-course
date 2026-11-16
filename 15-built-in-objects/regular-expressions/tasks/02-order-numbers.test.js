import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { findOrderNumbers } = await import(
    process.env.SOLUTIONS ? '../solutions/02-order-numbers.js' : './02-order-numbers.js'
);

test('one order number gives one object with numbers', () => {
    assert.deepEqual(findOrderNumbers('My order ORD-2026-00042 has not arrived.'), [
        { year: 2026, number: 42 },
    ]);
});

test('every order number is found, in the order they appear', () => {
    assert.deepEqual(findOrderNumbers('Where is ORD-2026-00042? Also ORD-2025-01337.'), [
        { year: 2026, number: 42 },
        { year: 2025, number: 1337 },
    ]);
});

test('an order number on another line is found too', () => {
    const email = 'Hello,\nI ordered twice:\nORD-2026-00100\nORD-2026-00101';
    assert.deepEqual(findOrderNumbers(email), [
        { year: 2026, number: 100 },
        { year: 2026, number: 101 },
    ]);
});

test('something that only looks like an order number is skipped', () => {
    assert.deepEqual(findOrderNumbers('ORD-26-42 and ORD-2026-042 are typos.'), []);
});

test('a text without order numbers gives an empty array', () => {
    assert.deepEqual(findOrderNumbers('Thanks for the help!'), []);
});

test('calling it twice gives the same result', () => {
    const text = 'ORD-2026-00042';
    findOrderNumbers(text);
    assert.deepEqual(findOrderNumbers(text), [{ year: 2026, number: 42 }]);
});
