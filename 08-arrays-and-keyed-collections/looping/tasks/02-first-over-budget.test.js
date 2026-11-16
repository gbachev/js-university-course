import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { findFirstOverBudget } = await import(
    process.env.SOLUTIONS ? '../solutions/02-first-over-budget.js' : './02-first-over-budget.js'
);

test('the index of the first price over the budget', () => {
    assert.equal(findFirstOverBudget([20, 45, 80, 120], 50), 2);
});

test('the first price can be over the budget', () => {
    assert.equal(findFirstOverBudget([90, 10], 50), 0);
});

test('a price equal to the budget is not over it', () => {
    assert.equal(findFirstOverBudget([50, 50, 51], 50), 2);
});

test('no price over the budget gives -1', () => {
    assert.equal(findFirstOverBudget([20, 45], 50), -1);
});

test('an empty wish list gives -1', () => {
    assert.equal(findFirstOverBudget([], 50), -1);
});
