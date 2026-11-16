import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatCartTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-cart-total.js' : './01-cart-total.js'
);

// Intl puts non-breaking spaces in its output, so we compare with ordinary spaces.
function plain(text) {
    return text.replace(/[\u00a0\u202f]/g, ' ');
}

const items = [
    { name: 'Notebook', price: 4.5, quantity: 2 },
    { name: 'Office chair', price: 1225.5, quantity: 1 },
];

test('the total in euros for a US customer', () => {
    assert.equal(plain(formatCartTotal(items, 'EUR', 'en-US')), '€1,234.50');
});

test('the same total for a German customer', () => {
    assert.equal(plain(formatCartTotal(items, 'EUR', 'de-DE')), '1.234,50 €');
});

test('the currency comes from the parameter, not from the locale', () => {
    assert.equal(plain(formatCartTotal(items, 'USD', 'en-US')), '$1,234.50');
    assert.equal(plain(formatCartTotal(items, 'USD', 'de-DE')), '1.234,50 $');
});

test('the total of 0.1 and 0.2 shows as 0.30', () => {
    const cart = [
        { name: 'Sticker', price: 0.1, quantity: 1 },
        { name: 'Pin', price: 0.2, quantity: 1 },
    ];
    assert.equal(plain(formatCartTotal(cart, 'EUR', 'en-US')), '€0.30');
});

test('an empty cart has a total of 0', () => {
    assert.equal(plain(formatCartTotal([], 'EUR', 'en-US')), '€0.00');
});
