import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toHeadline } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-shout-the-headline.js'
        : './01-shout-the-headline.js'
);

test('a lowercase title comes back in uppercase', () => {
    assert.equal(toHeadline('learn javascript'), 'LEARN JAVASCRIPT');
});

test('a title in mixed case comes back in uppercase', () => {
    assert.equal(toHeadline('Types in JS'), 'TYPES IN JS');
});

test('a title that is already uppercase stays the same', () => {
    assert.equal(toHeadline('NEWS'), 'NEWS');
});

test('the title we passed in does not change', () => {
    const title = 'weekly digest';
    toHeadline(title);
    assert.equal(title, 'weekly digest');
});
