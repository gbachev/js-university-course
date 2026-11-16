import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { keepFirst } = await import(
    process.env.SOLUTIONS ? '../solutions/03-keep-first.js' : './03-keep-first.js'
);

test('a longer conversation is cut to the limit', () => {
    assert.deepEqual(keepFirst(['Hi', 'How are you?', 'Fine'], 2), ['Hi', 'How are you?']);
});

test('the same array is changed and returned', () => {
    const messages = ['Hi', 'Hello', 'Bye'];
    const result = keepFirst(messages, 1);
    assert.equal(result, messages);
    assert.deepEqual(messages, ['Hi']);
});

test('a shorter conversation stays as it is, with no empty slots', () => {
    const result = keepFirst(['Hi'], 5);
    assert.deepEqual(result, ['Hi']);
    assert.equal(result.length, 1);
});

test('a conversation as long as the limit stays as it is', () => {
    assert.deepEqual(keepFirst(['Hi', 'Hello'], 2), ['Hi', 'Hello']);
});

test('a limit of 0 empties the conversation', () => {
    assert.deepEqual(keepFirst(['Hi', 'Hello'], 0), []);
});
