import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toSlug } = await import(
    process.env.SOLUTIONS ? '../solutions/03-url-slug.js' : './03-url-slug.js'
);

test('a title becomes a lowercase slug with dashes', () => {
    assert.equal(toSlug('Learn JavaScript Fast'), 'learn-javascript-fast');
});

test('spaces before and after the title do not become dashes', () => {
    assert.equal(toSlug('  Strings in JS '), 'strings-in-js');
});

test('every space between the words becomes a dash, not only the first one', () => {
    assert.equal(toSlug('one two three four'), 'one-two-three-four');
});

test('a title of one word has no dashes', () => {
    assert.equal(toSlug('Types'), 'types');
});
