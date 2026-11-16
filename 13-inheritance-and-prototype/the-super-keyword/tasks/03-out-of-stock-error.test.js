import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { OutOfStockError } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-out-of-stock-error.js'
        : './03-out-of-stock-error.js'
);

test('the error is an OutOfStockError and an Error', () => {
    const error = new OutOfStockError('Desk lamp', 5, 2);
    assert.equal(error instanceof OutOfStockError, true);
    assert.equal(error instanceof Error, true);
});

test('the message says how many are left and how many were requested', () => {
    assert.equal(
        new OutOfStockError('Desk lamp', 5, 2).message,
        'Only 2 of Desk lamp left, 5 requested'
    );
});

test('the error has its own name', () => {
    const error = new OutOfStockError('Desk lamp', 5, 2);
    assert.equal(error.name, 'OutOfStockError');
    assert.equal(String(error), 'OutOfStockError: Only 2 of Desk lamp left, 5 requested');
});

test('the error keeps the title and the numbers', () => {
    const error = new OutOfStockError('Desk lamp', 5, 2);
    assert.equal(error.title, 'Desk lamp');
    assert.equal(error.requested, 5);
    assert.equal(error.available, 2);
});

test('assert.throws recognizes it when we throw it', () => {
    assert.throws(() => {
        throw new OutOfStockError('Pen', 3, 0);
    }, { name: 'OutOfStockError', message: 'Only 0 of Pen left, 3 requested' });
});
