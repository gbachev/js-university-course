import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { bookLine } = await import(
    process.env.SOLUTIONS ? '../solutions/01-year-text.js' : './01-year-text.js'
);

test('a book with a year shows the year in parentheses', () => {
    const dune = { title: 'Dune', author: 'Frank Herbert', year: 1965, read: true };
    assert.equal(bookLine(dune), 'Dune, Frank Herbert (1965)');
});

test('a book with no year does not throw', () => {
    const emma = { title: 'Emma', author: 'Jane Austen', year: null, read: false };
    assert.doesNotThrow(() => bookLine(emma));
});

test('a book with no year shows year unknown', () => {
    const emma = { title: 'Emma', author: 'Jane Austen', year: null, read: false };
    assert.equal(bookLine(emma), 'Emma, Jane Austen (year unknown)');
});

test('an old year is shown as it is', () => {
    const odyssey = { title: 'The Odyssey', author: 'Homer', year: 700, read: false };
    assert.equal(bookLine(odyssey), 'The Odyssey, Homer (700)');
});
