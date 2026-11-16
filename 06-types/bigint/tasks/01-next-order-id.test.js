import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { nextOrderId } = await import(
    process.env.SOLUTIONS ? '../solutions/01-next-order-id.js' : './01-next-order-id.js'
);

test('a small ID gives the next ID as a BigInt', () => {
    assert.equal(nextOrderId('41'), 42n);
});

test('the next ID is a bigint, not a number', () => {
    assert.equal(typeof nextOrderId('41'), 'bigint');
});

test('an ID above the safe integer limit keeps every digit', () => {
    assert.equal(nextOrderId('9007199254740993'), 9007199254740994n);
});

test('a very long ID keeps every digit', () => {
    assert.equal(
        nextOrderId('123456789012345678901234567890'),
        123456789012345678901234567891n,
    );
});
