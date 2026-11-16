import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { coveragePercent } = await import(
    process.env.SOLUTIONS ? '../solutions/01-coverage-percent.js' : './01-coverage-percent.js'
);

test('everything covered is 100', () => {
    assert.equal(coveragePercent(14, 14), 100);
});

test('nothing covered is 0', () => {
    assert.equal(coveragePercent(0, 4), 0);
});

test('a share with two decimals', () => {
    assert.equal(coveragePercent(6, 7), 85.71);
});

test('the decimals are cut off, not rounded', () => {
    assert.equal(coveragePercent(13, 14), 92.85);
    assert.equal(coveragePercent(2, 3), 66.66);
});

test('fewer decimals stay as they are', () => {
    assert.equal(coveragePercent(10, 11), 90.9);
    assert.equal(coveragePercent(1, 2), 50);
    assert.equal(coveragePercent(7, 8), 87.5);
});

test('a file with nothing to cover counts as 100', () => {
    assert.equal(coveragePercent(0, 0), 100);
});
