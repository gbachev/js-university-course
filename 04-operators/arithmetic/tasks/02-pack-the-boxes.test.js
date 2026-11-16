import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { leftoverItems, fullBoxes } = await import(
    process.env.SOLUTIONS ? '../solutions/02-pack-the-boxes.js' : './02-pack-the-boxes.js'
);

test('the items that do not fill a box are left over', () => {
    assert.equal(leftoverItems(14, 6), 2);
});

test('nothing is left over when the items fill the boxes exactly', () => {
    assert.equal(leftoverItems(18, 6), 0);
});

test('we count only the full boxes', () => {
    assert.equal(fullBoxes(14, 6), 2);
});

test('items that fill the boxes exactly give whole boxes', () => {
    assert.equal(fullBoxes(18, 6), 3);
});

test('fewer items than one box fill no box and are all left over', () => {
    assert.equal(fullBoxes(4, 6), 0);
    assert.equal(leftoverItems(4, 6), 4);
});
