import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { recordVisit, resetVisits } = await import(
    process.env.SOLUTIONS ? '../solutions/02-visit-counter.js' : './02-visit-counter.js'
);

test('the first visit is visit 1', () => {
    resetVisits();
    assert.equal(recordVisit(), 1);
});

test('every visit adds one', () => {
    resetVisits();
    recordVisit();
    recordVisit();
    assert.equal(recordVisit(), 3);
});

test('after a reset we count from 1 again', () => {
    resetVisits();
    recordVisit();
    recordVisit();
    resetVisits();
    assert.equal(recordVisit(), 1);
});
