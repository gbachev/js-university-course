import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { INTERNAL_ID, addInternalId } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-hidden-internal-id.js'
        : './01-hidden-internal-id.js'
);

test('the ID is stored under the symbol key', () => {
    const book = addInternalId({ title: 'JS Basics' }, 1042);
    assert.equal(book[INTERNAL_ID], 1042);
});

test('the same product object comes back', () => {
    const book = { title: 'JS Basics' };
    assert.equal(addInternalId(book, 1042), book);
});

test('Object.keys() does not list the ID', () => {
    const book = addInternalId({ title: 'JS Basics', price: 20 }, 1042);
    assert.deepEqual(Object.keys(book), ['title', 'price']);
});

test('JSON.stringify() leaves the ID out', () => {
    const book = addInternalId({ title: 'JS Basics' }, 1042);
    assert.equal(JSON.stringify(book), '{"title":"JS Basics"}');
});
