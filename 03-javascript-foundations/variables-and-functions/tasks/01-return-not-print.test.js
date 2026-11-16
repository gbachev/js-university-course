import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { lineTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-return-not-print.js' : './01-return-not-print.js'
);

test('returns the price times the quantity', () => {
    assert.equal(lineTotal(10, 3), 30);
});

test('one copy costs the price of the book', () => {
    assert.equal(lineTotal(25, 1), 25);
});

test('a quantity of 0 gives a total of 0', () => {
    assert.equal(lineTotal(12, 0), 0);
});

test('the result can be stored and used in more math', () => {
    const total = lineTotal(8, 2) + lineTotal(5, 4);
    assert.equal(total, 36);
});
