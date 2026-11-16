import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countVotes } = await import(
    process.env.SOLUTIONS ? '../solutions/03-count-the-votes.js' : './03-count-the-votes.js'
);

test('counts the votes per title', () => {
    const result = countVotes(['Dune', 'Emma', 'Dune']);
    assert.equal(result.Dune, 2);
    assert.equal(result.Emma, 1);
});

test('the dictionary has no prototype', () => {
    assert.equal(Object.getPrototypeOf(countVotes(['Dune'])), null);
});

test('titles that match inherited names are counted like any other', () => {
    const result = countVotes(['constructor', 'toString', 'constructor']);
    assert.equal(result.constructor, 2);
    assert.equal(result.toString, 1);
});

test('__proto__ is counted as an ordinary title', () => {
    const result = countVotes(['__proto__', 'Dune']);
    assert.equal(result['__proto__'], 1);
    assert.deepEqual(Object.keys(result), ['__proto__', 'Dune']);
});

test('no votes give an empty dictionary', () => {
    assert.deepEqual(Object.keys(countVotes([])), []);
});
