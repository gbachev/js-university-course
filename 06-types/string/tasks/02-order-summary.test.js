import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { orderSummary } = await import(
    process.env.SOLUTIONS ? '../solutions/02-order-summary.js' : './02-order-summary.js'
);

test('an order of several books', () => {
    assert.equal(orderSummary('Ada', 3, 45.5), 'Ada ordered 3 books for $45.50');
});

test('an order of one book uses the word book', () => {
    assert.equal(orderSummary('Alan', 1, 12), 'Alan ordered 1 book for $12.00');
});

test('a total with two decimals keeps them', () => {
    assert.equal(orderSummary('Grace', 2, 19.99), 'Grace ordered 2 books for $19.99');
});

test('a whole total gets two zeros after the point', () => {
    assert.equal(orderSummary('Linus', 4, 60), 'Linus ordered 4 books for $60.00');
});
