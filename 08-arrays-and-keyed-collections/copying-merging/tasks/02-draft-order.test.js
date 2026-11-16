import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addToDraft } = await import(
    process.env.SOLUTIONS ? '../solutions/02-draft-order.js' : './02-draft-order.js'
);

test('the draft has the products of the order and the new product at the end', () => {
    assert.deepEqual(addToDraft(['mug', 'tea'], 'jam'), ['mug', 'tea', 'jam']);
});

test('the order itself does not change', () => {
    const order = ['mug', 'tea'];
    addToDraft(order, 'jam');
    assert.deepEqual(order, ['mug', 'tea']);
});

test('the draft is a new array', () => {
    const order = ['mug'];
    assert.notEqual(addToDraft(order, 'jam'), order);
});

test('a draft of an empty order holds only the new product', () => {
    assert.deepEqual(addToDraft([], 'jam'), ['jam']);
});
