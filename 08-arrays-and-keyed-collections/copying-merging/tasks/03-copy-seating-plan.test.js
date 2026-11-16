import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { copyPlan } = await import(
    process.env.SOLUTIONS ? '../solutions/03-copy-seating-plan.js' : './03-copy-seating-plan.js'
);

test('the copy has the same tables and guests', () => {
    assert.deepEqual(copyPlan([['Anna', 'Ben'], ['Carl']]), [['Anna', 'Ben'], ['Carl']]);
});

test('changing a guest in the copy leaves the original table as it is', () => {
    const plan = [['Anna', 'Ben'], ['Carl']];
    const copy = copyPlan(plan);
    copy[0][0] = 'Dana';
    assert.deepEqual(plan, [['Anna', 'Ben'], ['Carl']]);
});

test('adding a guest to a table in the copy leaves the original table as it is', () => {
    const plan = [['Anna', 'Ben'], ['Carl']];
    const copy = copyPlan(plan);
    copy[1].push('Eva');
    assert.deepEqual(plan[1], ['Carl']);
});

test('adding a table to the copy leaves the original plan as it is', () => {
    const plan = [['Anna']];
    const copy = copyPlan(plan);
    copy.push(['Fred']);
    assert.equal(plan.length, 1);
});

test('an empty plan gives an empty copy', () => {
    assert.deepEqual(copyPlan([]), []);
});
