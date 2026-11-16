import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { lineTotal } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-default-quantity.js'
        : './01-default-quantity.js'
);

test('a price and a quantity give their product', () => {
    assert.equal(lineTotal(10, 3), 30);
});

test('without a quantity we buy one item', () => {
    assert.equal(lineTotal(10), 10);
});

test('a quantity of undefined also means one item', () => {
    assert.equal(lineTotal(25, undefined), 25);
});

test('a quantity of 0 gives a total of 0', () => {
    assert.equal(lineTotal(10, 0), 0);
});
