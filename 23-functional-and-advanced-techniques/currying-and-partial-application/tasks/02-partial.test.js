import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { partial, logOrder } = await import(
    process.env.SOLUTIONS ? '../solutions/02-partial.js' : './02-partial.js'
);

const lineTotal = (price, quantity, discount) => price * quantity - discount;

test('fixes the first argument and takes the rest later', () => {
    const bookTotal = partial(lineTotal, 20);
    assert.equal(bookTotal(3, 5), 55);
});

test('can fix several arguments', () => {
    const threeBooks = partial(lineTotal, 20, 3);
    assert.equal(threeBooks(5), 55);
});

test('with every argument fixed, the call needs no arguments', () => {
    const order = partial(lineTotal, 20, 3, 5);
    assert.equal(order(), 55);
});

test('the arguments of one call do not stay for the next one', () => {
    const collect = partial((...items) => items, 'cart');
    assert.deepEqual(collect('Dune'), ['cart', 'Dune']);
    assert.deepEqual(collect('Emma', 'Pen'), ['cart', 'Emma', 'Pen']);
    assert.deepEqual(collect(), ['cart']);
});

test('logOrder adds the [order] prefix', () => {
    assert.equal(logOrder('Dune paid'), '[order] Dune paid');
    assert.equal(logOrder('Emma shipped'), '[order] Emma shipped');
});
