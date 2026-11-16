import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countItems } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-accidental-global.js'
        : './01-accidental-global.js'
);

test('the quantities of all lines add up', () => {
    const cart = [
        { name: 'Pen', quantity: 3 },
        { name: 'Notebook', quantity: 2 },
    ];
    assert.equal(countItems(cart), 5);
});

test('an empty cart has 0 items', () => {
    assert.equal(countItems([]), 0);
});

test('two calls do not add up to each other', () => {
    const cart = [{ name: 'Mug', quantity: 1 }];
    assert.equal(countItems(cart), 1);
    assert.equal(countItems(cart), 1);
});

test('the count does not end up on the global object', () => {
    countItems([{ name: 'Pen', quantity: 3 }]);
    assert.equal(Object.hasOwn(globalThis, 'count'), false);
});
