import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isSaleActive } = await import(
    process.env.SOLUTIONS ? '../solutions/01-sale-active.js' : './01-sale-active.js'
);

const summerSale2020 = {
    name: 'Summer 2020',
    startsAt: Date.parse('2020-06-01'),
    endsAt: Date.parse('2020-08-31'),
};
const springSale2090 = {
    name: 'Spring 2090',
    startsAt: Date.parse('2090-03-01'),
    endsAt: Date.parse('2090-05-31'),
};

test('a sale is active at a time inside it', () => {
    assert.equal(isSaleActive(summerSale2020, Date.parse('2020-07-15')), true);
    assert.equal(isSaleActive(springSale2090, Date.parse('2090-04-01')), true);
});

test('a sale is not active before it starts', () => {
    assert.equal(isSaleActive(springSale2090, Date.parse('2090-02-28')), false);
});

test('a sale is not active after it ends', () => {
    assert.equal(isSaleActive(summerSale2020, Date.parse('2020-09-01')), false);
});

test('the first and the last moment of the sale count', () => {
    assert.equal(isSaleActive(summerSale2020, summerSale2020.startsAt), true);
    assert.equal(isSaleActive(summerSale2020, summerSale2020.endsAt), true);
});

test('the same arguments always give the same answer', () => {
    const now = Date.parse('2020-07-15');
    assert.equal(isSaleActive(summerSale2020, now), isSaleActive(summerSale2020, now));
});
