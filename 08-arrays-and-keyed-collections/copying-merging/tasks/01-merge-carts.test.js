import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { mergeCarts } = await import(
    process.env.SOLUTIONS ? '../solutions/01-merge-carts.js' : './01-merge-carts.js'
);

test('the user cart comes first, then the guest cart', () => {
    assert.deepEqual(mergeCarts(['tea'], ['mug', 'pen']), ['mug', 'pen', 'tea']);
});

test('an empty guest cart adds nothing', () => {
    assert.deepEqual(mergeCarts([], ['mug']), ['mug']);
});

test('an empty user cart gives the guest products', () => {
    assert.deepEqual(mergeCarts(['tea', 'jam'], []), ['tea', 'jam']);
});

test('the result is a new array and neither cart changes', () => {
    const guestCart = ['tea'];
    const userCart = ['mug'];
    const merged = mergeCarts(guestCart, userCart);
    assert.notEqual(merged, userCart);
    assert.notEqual(merged, guestCart);
    assert.deepEqual(guestCart, ['tea']);
    assert.deepEqual(userCart, ['mug']);
});
