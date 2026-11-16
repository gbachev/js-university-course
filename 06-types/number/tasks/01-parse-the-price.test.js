import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { parsePrice } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-parse-the-price.js'
        : './01-parse-the-price.js'
);

test('a price with decimals keeps its decimals', () => {
    assert.equal(parsePrice('19.99 EUR'), 19.99);
});

test('a whole price is parsed too', () => {
    assert.equal(parsePrice('5 EUR'), 5);
});

test('a price without a currency is parsed', () => {
    assert.equal(parsePrice('7.5'), 7.5);
});

test('text that does not start with a number gives 0', () => {
    assert.equal(parsePrice('free'), 0);
});

test('an empty string gives 0', () => {
    assert.equal(parsePrice(''), 0);
});
