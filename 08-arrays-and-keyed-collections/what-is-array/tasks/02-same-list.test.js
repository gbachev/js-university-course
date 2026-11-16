import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isSameList } = await import(
    process.env.SOLUTIONS ? '../solutions/02-same-list.js' : './02-same-list.js'
);

test('two arrays with the same items in the same order are the same list', () => {
    assert.equal(isSameList(['milk', 'eggs', 'bread'], ['milk', 'eggs', 'bread']), true);
});

test('the same items in another order are not the same list', () => {
    assert.equal(isSameList(['milk', 'eggs'], ['eggs', 'milk']), false);
});

test('a list with an extra item is not the same list', () => {
    assert.equal(isSameList(['milk', 'eggs'], ['milk', 'eggs', 'bread']), false);
    assert.equal(isSameList(['milk', 'eggs', 'bread'], ['milk', 'eggs']), false);
});

test('two empty lists are the same list', () => {
    assert.equal(isSameList([], []), true);
});

test('a number and the same number as a string are not the same item', () => {
    assert.equal(isSameList([1, 2], [1, '2']), false);
});
