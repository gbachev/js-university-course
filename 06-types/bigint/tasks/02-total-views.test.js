import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { totalViews } = await import(
    process.env.SOLUTIONS ? '../solutions/02-total-views.js' : './02-total-views.js'
);

test('the views of today are added to the views of all time', () => {
    assert.equal(totalViews(1000n, 25), 1025n);
});

test('a large total keeps every digit', () => {
    assert.equal(totalViews(9007199254740993n, 7), 9007199254741000n);
});

test('a day without views keeps the total', () => {
    assert.equal(totalViews(500n, 0), 500n);
});

test('the total is a bigint', () => {
    assert.equal(typeof totalViews(1n, 1), 'bigint');
});
