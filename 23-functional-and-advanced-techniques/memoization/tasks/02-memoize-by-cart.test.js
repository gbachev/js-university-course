import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { memoizeByObject, cartTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/02-memoize-by-cart.js' : './02-memoize-by-cart.js'
);

function countingTotal() {
    const total = (cart) => {
        total.calls++;
        return cart.items.length;
    };
    total.calls = 0;
    return total;
}

test('runs fn once for the same object', () => {
    const total = countingTotal();
    const memoTotal = memoizeByObject(total);
    const cart = { items: [1, 2] };
    assert.equal(memoTotal(cart), 2);
    assert.equal(memoTotal(cart), 2);
    assert.equal(total.calls, 1);
});

test('two objects with the same content are two keys', () => {
    const total = countingTotal();
    const memoTotal = memoizeByObject(total);
    memoTotal({ items: [1] });
    memoTotal({ items: [1] });
    assert.equal(total.calls, 2);
});

test('a new cart object gets a new result', () => {
    const memoTotal = memoizeByObject(countingTotal());
    const cart = { items: [1] };
    const bigger = { items: [...cart.items, 2] };
    assert.equal(memoTotal(cart), 1);
    assert.equal(memoTotal(bigger), 2);
});

test('remembers a result of 0', () => {
    const total = countingTotal();
    const memoTotal = memoizeByObject(total);
    const empty = { items: [] };
    assert.equal(memoTotal(empty), 0);
    assert.equal(memoTotal(empty), 0);
    assert.equal(total.calls, 1);
});

test('a primitive argument throws a TypeError, as a WeakMap key would', () => {
    const memoTotal = memoizeByObject((x) => x);
    assert.equal(typeof memoTotal, 'function');
    assert.throws(() => memoTotal('cart-1'), TypeError);
});

test('cartTotal sums price times qty', () => {
    const cart = { items: [{ price: 25, qty: 1 }, { price: 9, qty: 2 }] };
    assert.equal(cartTotal(cart), 43);
    assert.equal(cartTotal({ items: [] }), 0);
});
