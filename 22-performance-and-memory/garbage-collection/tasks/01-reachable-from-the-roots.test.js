import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { markReachable } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-reachable-from-the-roots.js'
        : './01-reachable-from-the-roots.js'
);

const heap = {
    globals: ['cart', 'track'],
    stack: ['product'],
    cart: ['items'],
    items: [],
    track: ['visits'],
    visits: [],
    product: [],
    order: ['invoice'],
    invoice: ['order'],
};

test('it follows references from a root, step by step', () => {
    assert.deepEqual(markReachable(heap, ['stack']), ['product', 'stack']);
    const small = { globals: ['cart'], cart: ['items'], items: [] };
    assert.deepEqual(markReachable(small, ['globals']), ['cart', 'globals', 'items']);
});

test('it starts from every root and sorts the names', () => {
    assert.deepEqual(markReachable(heap, ['globals', 'stack']), [
        'cart',
        'globals',
        'items',
        'product',
        'stack',
        'track',
        'visits',
    ]);
});

test('a cycle that no root reaches is not reachable', () => {
    const reachable = markReachable(heap, ['globals', 'stack']);
    assert.equal(reachable.includes('order'), false);
    assert.equal(reachable.includes('invoice'), false);
});

test('a cycle that is reachable is marked once, without looping forever', () => {
    assert.deepEqual(markReachable(heap, ['order']), ['invoice', 'order']);
    assert.deepEqual(markReachable({ node: ['node'] }, ['node']), ['node']);
});

test('a value reached by two paths is listed once', () => {
    const shared = { globals: ['cart', 'lastCart'], cart: ['items'], lastCart: ['items'], items: [] };
    assert.deepEqual(markReachable(shared, ['globals']), ['cart', 'globals', 'items', 'lastCart']);
});

test('no roots, nothing reachable', () => {
    assert.deepEqual(markReachable(heap, []), []);
});
