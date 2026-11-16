import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sumPrices } = await import(
    process.env.SOLUTIONS ? '../solutions/01-sum-all.js' : './01-sum-all.js'
);

test('two prices are added up', () => {
    assert.equal(sumPrices(4, 6), 10);
});

test('more prices are added up too', () => {
    assert.equal(sumPrices(1, 2, 3, 4, 5), 15);
});

test('one price is that price', () => {
    assert.equal(sumPrices(7), 7);
});

test('no prices give 0', () => {
    assert.equal(sumPrices(), 0);
});
