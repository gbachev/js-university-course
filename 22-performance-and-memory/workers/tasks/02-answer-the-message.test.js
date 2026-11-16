import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { handleMessage } = await import(
    process.env.SOLUTIONS ? '../solutions/02-answer-the-message.js' : './02-answer-the-message.js'
);

const books = [{ title: 'Dune' }, { title: 'Emma' }, { title: 'Dracula' }];

test('a search finds the books whose title includes the query', () => {
    assert.deepEqual(handleMessage({ type: 'search', books, query: 'Du' }), {
        type: 'found',
        books: [{ title: 'Dune' }],
    });
});

test('a search ignores upper and lower case', () => {
    assert.deepEqual(handleMessage({ type: 'search', books, query: 'd' }), {
        type: 'found',
        books: [{ title: 'Dune' }, { title: 'Dracula' }],
    });
});

test('a search without matches finds an empty list', () => {
    assert.deepEqual(handleMessage({ type: 'search', books, query: 'Zola' }), {
        type: 'found',
        books: [],
    });
});

test('a count answers with the number of books', () => {
    assert.deepEqual(handleMessage({ type: 'count', books }), { type: 'counted', count: 3 });
    assert.deepEqual(handleMessage({ type: 'count', books: [] }), { type: 'counted', count: 0 });
});

test('an unknown task answers with an error message', () => {
    assert.deepEqual(handleMessage({ type: 'sort', books }), {
        type: 'error',
        message: 'Unknown task: sort',
    });
});

test('the books it gets are not changed', () => {
    handleMessage({ type: 'search', books, query: 'Emma' });
    assert.deepEqual(books, [{ title: 'Dune' }, { title: 'Emma' }, { title: 'Dracula' }]);
});
