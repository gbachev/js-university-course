import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { formatTotal, renderTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-plain-total.js' : './02-plain-total.js'
);

const cart = [
    { title: 'Clean Code', price: 32.5, quantity: 1 },
    { title: 'Eloquent JavaScript', price: 28, quantity: 2 },
];

test('the total of one book has two decimals', () => {
    assert.equal(formatTotal([cart[0]]), 'Total: 32.50 EUR');
});

test('the quantity counts in the total', () => {
    assert.equal(formatTotal(cart), 'Total: 88.50 EUR');
});

test('an empty cart costs 0.00 EUR', () => {
    assert.equal(formatTotal([]), 'Total: 0.00 EUR');
});

test('renderTotal still writes the total to the tab title', () => {
    globalThis.document = { title: '' };
    try {
        renderTotal(cart);
        assert.equal(globalThis.document.title, 'Total: 88.50 EUR');
    } finally {
        delete globalThis.document;
    }
});
