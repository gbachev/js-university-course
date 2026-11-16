import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countComments } = await import(
    process.env.SOLUTIONS ? '../solutions/03-count-replies.js' : './03-count-replies.js'
);

const comments = [
    {
        text: 'Great book!',
        replies: [
            { text: 'Agreed', replies: [] },
            {
                text: 'Which chapter?',
                replies: [{ text: 'Chapter 3', replies: [] }],
            },
        ],
    },
    { text: 'Fast delivery', replies: [] },
];

function deepThread(depth) {
    let comment = { text: `Reply ${depth}`, replies: [] };
    for (let level = depth - 1; level >= 1; level--) {
        comment = { text: `Reply ${level}`, replies: [comment] };
    }
    return [comment];
}

test('counts the comments and their replies at every depth', () => {
    assert.equal(countComments(comments), 5);
});

test('an empty list has 0 comments', () => {
    assert.equal(countComments([]), 0);
});

test('counts comments without replies', () => {
    const flat = Array.from({ length: 50 }, (_, i) => ({
        text: `Comment ${i}`,
        replies: [],
    }));
    assert.equal(countComments(flat), 50);
});

test('handles a thread nested 100,000 levels deep', () => {
    assert.equal(countComments(deepThread(100_000)), 100_000);
});

test('does not change the comments', () => {
    const before = structuredClone(comments);
    countComments(comments);
    assert.deepEqual(comments, before);
});
