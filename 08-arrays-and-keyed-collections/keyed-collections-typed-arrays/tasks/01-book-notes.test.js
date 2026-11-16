import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { addNote, getNotes } = await import(
    process.env.SOLUTIONS ? '../solutions/01-book-notes.js' : './01-book-notes.js'
);

test('a book without notes gives an empty array', () => {
    assert.deepEqual(getNotes({ title: 'Emma' }), []);
});

test('addNote() returns how many notes the book has now', () => {
    const dune = { title: 'Dune' };
    assert.equal(addNote(dune, 'Read the appendix'), 1);
    assert.equal(addNote(dune, 'Lend to Anna'), 2);
});

test('the notes come back in the order they were added', () => {
    const dune = { title: 'Dune' };
    addNote(dune, 'Read the appendix');
    addNote(dune, 'Lend to Anna');
    assert.deepEqual(getNotes(dune), ['Read the appendix', 'Lend to Anna']);
});

test('each book has its own notes, even with the same title', () => {
    const dune = { title: 'Dune' };
    const anotherDune = { title: 'Dune' };
    addNote(dune, 'Signed copy');
    assert.deepEqual(getNotes(anotherDune), []);
    assert.equal(addNote(anotherDune, 'Paperback'), 1);
    assert.deepEqual(getNotes(dune), ['Signed copy']);
});

test('the book object itself is not changed', () => {
    const emma = { title: 'Emma' };
    addNote(emma, 'Start chapter 3');
    assert.deepEqual(emma, { title: 'Emma' });
});
