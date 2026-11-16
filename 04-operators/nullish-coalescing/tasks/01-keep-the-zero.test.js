import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getVolume } = await import(
    process.env.SOLUTIONS ? '../solutions/01-keep-the-zero.js' : './01-keep-the-zero.js'
);

test('a saved volume is used as it is', () => {
    assert.equal(getVolume(80), 80);
});

test('a saved volume of 0 stays 0', () => {
    assert.equal(getVolume(0), 0);
});

test('no saved volume falls back to 50', () => {
    assert.equal(getVolume(undefined), 50);
});

test('a volume saved as null falls back to 50', () => {
    assert.equal(getVolume(null), 50);
});
