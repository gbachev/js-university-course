import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getUniqueTags } = await import(
    process.env.SOLUTIONS ? '../solutions/01-unique-tags.js' : './01-unique-tags.js'
);

test('every tag appears once, in the order it first appears', () => {
    const tags = ['js', 'css', 'js', 'html', 'css'];
    assert.deepEqual(getUniqueTags(tags), ['js', 'css', 'html']);
});

test('tags with no duplicates stay as they are', () => {
    assert.deepEqual(getUniqueTags(['node', 'npm']), ['node', 'npm']);
});

test('tags are case-sensitive', () => {
    assert.deepEqual(getUniqueTags(['JS', 'js', 'JS']), ['JS', 'js']);
});

test('the result is an array', () => {
    assert.equal(Array.isArray(getUniqueTags(['js'])), true);
});

test('no tags give an empty array', () => {
    assert.deepEqual(getUniqueTags([]), []);
});
