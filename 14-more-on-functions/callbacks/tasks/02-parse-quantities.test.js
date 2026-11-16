import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { parseQuantities } = await import(
    process.env.SOLUTIONS ? '../solutions/02-parse-quantities.js' : './02-parse-quantities.js'
);

test('the same value on every line gives the same number', () => {
    assert.deepEqual(parseQuantities(['10', '10', '10']), [10, 10, 10]);
});

test('reads every line as a base 10 number', () => {
    assert.deepEqual(parseQuantities(['3', '12', '7', '25']), [3, 12, 7, 25]);
});

test('the first line keeps working', () => {
    assert.deepEqual(parseQuantities(['8']), [8]);
});

test('an empty order gives an empty array', () => {
    assert.deepEqual(parseQuantities([]), []);
});
