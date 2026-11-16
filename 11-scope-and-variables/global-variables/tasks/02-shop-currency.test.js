import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getCurrency } = await import(
    process.env.SOLUTIONS ? '../solutions/02-shop-currency.js' : './02-shop-currency.js'
);

test('without a global currency we get EUR', () => {
    delete globalThis.shopCurrency;
    assert.equal(getCurrency(), 'EUR');
});

test('the currency set on globalThis wins', () => {
    globalThis.shopCurrency = 'USD';
    assert.equal(getCurrency(), 'USD');
    delete globalThis.shopCurrency;
});

test('a new value on globalThis is read on the next call', () => {
    globalThis.shopCurrency = 'BGN';
    assert.equal(getCurrency(), 'BGN');
    globalThis.shopCurrency = 'GBP';
    assert.equal(getCurrency(), 'GBP');
    delete globalThis.shopCurrency;
});

test('an empty string or a number is not a currency', () => {
    globalThis.shopCurrency = '';
    assert.equal(getCurrency(), 'EUR');
    globalThis.shopCurrency = 42;
    assert.equal(getCurrency(), 'EUR');
    delete globalThis.shopCurrency;
});
