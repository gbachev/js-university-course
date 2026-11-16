import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { sharePoints } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-share-the-points.js'
        : './03-share-the-points.js'
);

test('points that do not divide evenly leave some over', () => {
    assert.deepEqual(sharePoints(10n, 3n), [3n, 1n]);
});

test('points that divide evenly leave nothing over', () => {
    assert.deepEqual(sharePoints(12n, 4n), [3n, 0n]);
});

test('fewer points than players gives each player 0', () => {
    assert.deepEqual(sharePoints(2n, 5n), [0n, 2n]);
});

test('a huge prize is shared without losing digits', () => {
    assert.deepEqual(sharePoints(90071992547409930n, 10n), [9007199254740993n, 0n]);
});
