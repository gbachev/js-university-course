import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { withdraw } = await import(
    process.env.SOLUTIONS ? '../solutions/01-a-real-error.js' : './01-a-real-error.js'
);

test('a withdrawal returns the balance left', () => {
    assert.equal(withdraw(100, 30), 70);
});

test('taking out the whole balance is allowed', () => {
    assert.equal(withdraw(50, 50), 0);
});

test('too big an amount throws a RangeError that says both numbers', () => {
    assert.throws(() => withdraw(50, 80), {
        name: 'RangeError',
        message: 'Insufficient funds: balance 50, amount 80'
    });
});

test('what we throw is an Error object with a stack', () => {
    assert.throws(
        () => withdraw(10, 11),
        (error) => error instanceof Error && typeof error.stack === 'string'
    );
});
