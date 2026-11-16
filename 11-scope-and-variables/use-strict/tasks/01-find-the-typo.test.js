import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { orderTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-find-the-typo.js' : './01-find-the-typo.js'
);

test('the prices of an order add up', () => {
    assert.equal(orderTotal([20, 15, 5]), 40);
});

test('an order with one price has that price as its total', () => {
    assert.equal(orderTotal([9.5]), 9.5);
});

test('an empty order has a total of 0', () => {
    assert.equal(orderTotal([]), 0);
});

test('no global variable is created', () => {
    orderTotal([1, 2]);
    assert.equal(Object.hasOwn(globalThis, 'totl'), false);
});
