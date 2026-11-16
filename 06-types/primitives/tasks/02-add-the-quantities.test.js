import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addQuantities } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-add-the-quantities.js'
        : './02-add-the-quantities.js'
);

test('two quantities as strings add up to a number', () => {
    assert.equal(addQuantities('3', '4'), 7);
});

test('a number and a string add up to a number', () => {
    assert.equal(addQuantities(2, '5'), 7);
});

test('two numbers still add up', () => {
    assert.equal(addQuantities(10, 1), 11);
});

test('an empty field counts as zero items', () => {
    assert.equal(addQuantities('', '2'), 2);
});
