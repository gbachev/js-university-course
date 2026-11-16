import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countReferences } = await import(
    process.env.SOLUTIONS ? '../solutions/02-reference-counting.js' : './02-reference-counting.js'
);

test('a value referenced once has a count of one', () => {
    assert.deepEqual(countReferences({ cart: ['items'], items: [] }, ['cart']), {
        cart: 1,
        items: 1,
    });
});

test('a value nobody references has a count of zero', () => {
    assert.deepEqual(countReferences({ globals: ['cart'], cart: [], mug: [] }, ['globals']), {
        globals: 1,
        cart: 1,
        mug: 0,
    });
});

test('two paths to one value give a count of two', () => {
    const heap = { globals: ['cart', 'lastCart'], cart: ['items'], lastCart: ['items'], items: [] };
    assert.equal(countReferences(heap, ['globals']).items, 2);
});

test('every root adds a reference', () => {
    const heap = { globals: ['product'], stack: ['product'], product: [] };
    assert.deepEqual(countReferences(heap, ['globals', 'stack']), {
        globals: 1,
        stack: 1,
        product: 2,
    });
});

test('a cycle without a root keeps both counts at one', () => {
    const heap = { globals: [], order: ['invoice'], invoice: ['order'] };
    assert.deepEqual(countReferences(heap, ['globals']), { globals: 1, order: 1, invoice: 1 });
});

test('the heap is not changed', () => {
    const heap = { globals: ['cart'], cart: [] };
    countReferences(heap, ['globals']);
    assert.deepEqual(heap, { globals: ['cart'], cart: [] });
});
