import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { makePriceFormatter } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-price-formatter.js'
        : './03-price-formatter.js'
);

test('makePriceFormatter returns a function', () => {
    assert.equal(typeof makePriceFormatter('EUR'), 'function');
});

test('the returned function formats an amount in the currency', () => {
    const euro = makePriceFormatter('EUR');
    assert.equal(euro(12.5), '12.50 EUR');
    assert.equal(euro(3), '3.00 EUR');
});

test('we can call the returned function right away', () => {
    assert.equal(makePriceFormatter('USD')(19.99), '19.99 USD');
});

test('two formatters keep their own currency', () => {
    const euro = makePriceFormatter('EUR');
    const lev = makePriceFormatter('BGN');
    assert.equal(euro(10), '10.00 EUR');
    assert.equal(lev(10), '10.00 BGN');
});
