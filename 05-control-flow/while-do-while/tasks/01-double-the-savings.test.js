import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { yearsToDouble } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-double-the-savings.js'
        : './01-double-the-savings.js'
);

test('at 10 percent the savings double in 8 years', () => {
    assert.equal(yearsToDouble(1000, 10), 8);
});

test('at 100 percent the savings double in one year', () => {
    assert.equal(yearsToDouble(1000, 100), 1);
});

test('the starting amount does not change the number of years', () => {
    assert.equal(yearsToDouble(50, 25), 4);
    assert.equal(yearsToDouble(5000, 25), 4);
});

test('a rate of 0 or less returns -1 instead of looping forever', () => {
    assert.equal(yearsToDouble(1000, 0), -1);
    assert.equal(yearsToDouble(1000, -5), -1);
});
