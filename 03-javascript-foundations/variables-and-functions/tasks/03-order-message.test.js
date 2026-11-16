import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { orderMessage } = await import(
    process.env.SOLUTIONS ? '../solutions/03-order-message.js' : './03-order-message.js'
);

test('returns the message with the full name and the total', () => {
    assert.equal(orderMessage('Jane', 'Doe', 10, 3), 'Jane Doe, your order total is 30.');
});

test('works for a single book', () => {
    assert.equal(orderMessage('John', 'Doe', 25, 1), 'John Doe, your order total is 25.');
});

test('multiplies the price by the quantity before adding it to the text', () => {
    assert.equal(orderMessage('Ann', 'Lee', 4, 5), 'Ann Lee, your order total is 20.');
});

test('a quantity of 0 gives a total of 0', () => {
    assert.equal(orderMessage('Jane', 'Doe', 12, 0), 'Jane Doe, your order total is 0.');
});
