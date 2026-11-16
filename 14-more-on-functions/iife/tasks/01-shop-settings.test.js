import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createShopSettings } = await import(
    process.env.SOLUTIONS ? '../solutions/01-shop-settings.js' : './01-shop-settings.js'
);

test('does not throw', () => {
    assert.doesNotThrow(() => createShopSettings());
});

test('returns the currency, the language and the free shipping limit', () => {
    assert.deepEqual(createShopSettings(), {
        currency: 'EUR',
        language: 'en',
        freeShippingFrom: 50,
    });
});

test('every call returns new settings', () => {
    assert.notEqual(createShopSettings(), createShopSettings());
});
