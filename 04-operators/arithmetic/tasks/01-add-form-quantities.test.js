import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addQuantities } = await import(
    process.env.SOLUTIONS ? '../solutions/01-add-form-quantities.js' : './01-add-form-quantities.js'
);

test('two quantities written as text are added as numbers', () => {
    assert.equal(addQuantities('2', '3'), 5);
});

test('a quantity of zero adds nothing', () => {
    assert.equal(addQuantities('10', '0'), 10);
});

test('quantities that are already numbers still work', () => {
    assert.equal(addQuantities(4, 6), 10);
});
