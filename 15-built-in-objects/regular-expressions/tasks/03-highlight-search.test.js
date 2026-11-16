import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { highlight } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-highlight-search.js'
        : './03-highlight-search.js'
);

test('a plain word is wrapped in brackets', () => {
    assert.equal(highlight('Buy milk and bread', 'milk'), 'Buy [milk] and bread');
});

test('every match is wrapped, ignoring case and keeping the spelling', () => {
    assert.equal(highlight('Milk, milk, MILK', 'milk'), '[Milk], [milk], [MILK]');
});

test('a search with + does not throw and matches itself', () => {
    assert.equal(highlight('I write C++ at work.', 'c++'), 'I write [C++] at work.');
});

test('a dot in the search matches only a dot', () => {
    assert.equal(highlight('Pay $4.50, not $4750.', '4.50'), 'Pay $[4.50], not $4750.');
});

test('brackets and a dollar sign in the search match themselves', () => {
    assert.equal(highlight('Total (net): $10', '(net)'), 'Total [(net)]: $10');
    assert.equal(highlight('Total (net): $10', '$10'), 'Total (net): [$10]');
});

test('an empty search returns the text unchanged', () => {
    assert.equal(highlight('Buy milk', ''), 'Buy milk');
});
