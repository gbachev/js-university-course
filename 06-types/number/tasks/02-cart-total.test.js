import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { cartTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-cart-total.js' : './02-cart-total.js'
);

test('0.1 times 3 is exactly 0.3', () => {
    assert.equal(cartTotal(0.1, 3), 0.3);
});

test('a price with two decimals times a quantity has two decimals', () => {
    assert.equal(cartTotal(19.99, 3), 59.97);
});

test('a total that is a whole number stays whole', () => {
    assert.equal(cartTotal(2.5, 4), 10);
});

test('a quantity of 0 gives a total of 0', () => {
    assert.equal(cartTotal(19.99, 0), 0);
});

test('the total is a number, not a string', () => {
    assert.equal(typeof cartTotal(1.15, 3), 'number');
    assert.equal(cartTotal(1.15, 3), 3.45);
});
