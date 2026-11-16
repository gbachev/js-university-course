import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createCartCounter } = await import(
    process.env.SOLUTIONS ? '../solutions/01-cart-counter.js' : './01-cart-counter.js'
);

test('a new cart has 0 items', () => {
    assert.equal(createCartCounter().count(), 0);
});

test('add and remove change the count', () => {
    const cart = createCartCounter();
    cart.add();
    cart.add();
    cart.remove();
    assert.equal(cart.count(), 1);
});

test('remove on an empty cart leaves the count at 0', () => {
    const cart = createCartCounter();
    cart.remove();
    assert.equal(cart.count(), 0);
    cart.add();
    assert.equal(cart.count(), 1);
});

test('two carts count separately', () => {
    const first = createCartCounter();
    const second = createCartCounter();
    first.add();
    first.add();
    second.add();
    assert.equal(first.count(), 2);
    assert.equal(second.count(), 1);
});

test('the number is not a property of the object', () => {
    const cart = createCartCounter();
    cart.add();
    assert.deepEqual(Object.keys(cart).sort(), ['add', 'count', 'remove']);
});
