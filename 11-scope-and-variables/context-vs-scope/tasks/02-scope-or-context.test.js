import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createPrice } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-scope-or-context.js'
        : './02-scope-or-context.js'
);

test('the label shows the amount with two decimals and the currency', () => {
    assert.equal(createPrice(12.5).label(), '12.50 EUR');
});

test('a whole amount gets two decimals too', () => {
    assert.equal(createPrice(7).label(), '7.00 EUR');
});

test('the label shows the amount the price has now', () => {
    const price = createPrice(12.5);
    price.amount = 20;
    assert.equal(price.label(), '20.00 EUR');
});

test('a currency property on the object does not change the shop currency', () => {
    const price = createPrice(5);
    price.currency = 'USD';
    assert.equal(price.label(), '5.00 EUR');
});
