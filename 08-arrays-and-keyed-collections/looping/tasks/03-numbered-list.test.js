import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { numberTheList } = await import(
    process.env.SOLUTIONS ? '../solutions/03-numbered-list.js' : './03-numbered-list.js'
);

test('each book gets its number, starting at 1', () => {
    assert.deepEqual(numberTheList(['Dune', 'Emma', 'Ulysses']), [
        '1. Dune',
        '2. Emma',
        '3. Ulysses',
    ]);
});

test('the tenth book is number 10', () => {
    const titles = new Array(10).fill('Dune');
    assert.equal(numberTheList(titles)[9], '10. Dune');
});

test('an extra property on the array is not a book', () => {
    const titles = ['Dune', 'Emma'];
    titles.updatedAt = 'today';
    assert.deepEqual(numberTheList(titles), ['1. Dune', '2. Emma']);
});

test('an empty list gives no lines', () => {
    assert.deepEqual(numberTheList([]), []);
});
