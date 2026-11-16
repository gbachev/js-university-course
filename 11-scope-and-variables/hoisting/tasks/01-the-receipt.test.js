import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { receipt } = await import(
    process.env.SOLUTIONS ? '../solutions/01-the-receipt.js' : './01-the-receipt.js'
);

test('one item gives one line', () => {
    assert.equal(receipt([{ name: 'Book', price: 12.5 }]), 'Book: 12.50');
});

test('every item gets its own line, in order', () => {
    const items = [
        { name: 'Book', price: 12.5 },
        { name: 'Pen', price: 2 },
    ];
    assert.equal(receipt(items), 'Book: 12.50\nPen: 2.00');
});

test('an empty list gives an empty receipt', () => {
    assert.equal(receipt([]), '');
});
