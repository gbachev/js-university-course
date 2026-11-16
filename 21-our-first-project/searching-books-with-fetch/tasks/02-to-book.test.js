import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toBook } = await import(
    process.env.SOLUTIONS ? '../solutions/02-to-book.js' : './02-to-book.js'
);

test('a full result keeps its one author, year and cover', () => {
    const doc = {
        key: '/works/OL893414W',
        title: 'Dune',
        author_name: ['Frank Herbert'],
        first_publish_year: 1965,
        cover_i: 11481354,
    };
    assert.deepEqual(toBook(doc), {
        key: '/works/OL893414W',
        title: 'Dune',
        author: 'Frank Herbert',
        year: 1965,
        coverId: 11481354,
    });
});

test('two authors are joined with and', () => {
    const doc = {
        key: 'k',
        title: 'Sandworms of Dune',
        author_name: ['Kevin J. Anderson', 'Brian Herbert'],
    };
    assert.equal(toBook(doc).author, 'Kevin J. Anderson and Brian Herbert');
});

test('three or more authors show the first one and the count of the others', () => {
    const doc = {
        key: 'k',
        title: 'Dragons of Autumn Twilight',
        author_name: ['Margaret Weis', 'Tracy Hickman', 'Larry Elmore'],
    };
    assert.equal(toBook(doc).author, 'Margaret Weis and 2 others');
});

test('a missing or empty author list gives Unknown author', () => {
    assert.equal(toBook({ key: 'k', title: 'Notes' }).author, 'Unknown author');
    const empty = { key: 'k', title: 'Notes', author_name: [] };
    assert.equal(toBook(empty).author, 'Unknown author');
});

test('a missing title gives Untitled', () => {
    assert.equal(toBook({ key: 'k', author_name: ['Jane Austen'] }).title, 'Untitled');
});

test('a missing year and cover are null, never undefined', () => {
    const book = toBook({ key: 'k', title: 'Notes' });
    assert.equal(book.year, null);
    assert.equal(book.coverId, null);
});
