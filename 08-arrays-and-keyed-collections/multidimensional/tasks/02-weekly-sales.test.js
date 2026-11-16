import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getWeeklyTotals } = await import(
    process.env.SOLUTIONS ? '../solutions/02-weekly-sales.js' : './02-weekly-sales.js'
);

test('every week gets the total of its days', () => {
    assert.deepEqual(getWeeklyTotals([[10, 20, 30], [5, 5]]), [60, 10]);
});

test('weeks can have a different number of days', () => {
    assert.deepEqual(getWeeklyTotals([[1, 2, 3, 4, 5, 6, 7], [100]]), [28, 100]);
});

test('an empty week has a total of 0', () => {
    assert.deepEqual(getWeeklyTotals([[10], []]), [10, 0]);
});

test('no weeks give no totals', () => {
    assert.deepEqual(getWeeklyTotals([]), []);
});

test('the sales array does not change', () => {
    const sales = [[10, 20], [5]];
    getWeeklyTotals(sales);
    assert.deepEqual(sales, [[10, 20], [5]]);
});
