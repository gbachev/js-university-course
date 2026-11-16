import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createPriceFormatter } = await import(
    process.env.SOLUTIONS ? '../solutions/03-price-formatter.js' : './03-price-formatter.js'
);

test('returns a function', () => {
    assert.equal(typeof createPriceFormatter('EUR'), 'function');
});

test('the formatter writes the amount with two decimals and the currency', () => {
    const toEuro = createPriceFormatter('EUR');
    assert.equal(toEuro(12.5), '12.50 EUR');
    assert.equal(toEuro(0), '0.00 EUR');
});

test('the formatter works as a map callback', () => {
    const toEuro = createPriceFormatter('EUR');
    assert.deepEqual([7, 49].map(toEuro), ['7.00 EUR', '49.00 EUR']);
});

test('two formatters keep their own currency', () => {
    const toEuro = createPriceFormatter('EUR');
    const toDollar = createPriceFormatter('USD');
    assert.equal(toEuro(10), '10.00 EUR');
    assert.equal(toDollar(10), '10.00 USD');
});
