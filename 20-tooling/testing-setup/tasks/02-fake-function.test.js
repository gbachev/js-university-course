import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createMock } = await import(
    process.env.SOLUTIONS ? '../solutions/02-fake-function.js' : './02-fake-function.js'
);

test('the mock returns what the implementation returns', () => {
    const fakeFetch = createMock((url) => ({ ok: true, url }));
    assert.deepEqual(
        fakeFetch('/search.json?q=dune'),
        { ok: true, url: '/search.json?q=dune' },
    );
});

test('without an implementation the mock returns undefined', () => {
    const onSave = createMock();
    assert.equal(onSave('Dune'), undefined);
});

test('a new mock has no calls', () => {
    const onSave = createMock();
    assert.deepEqual(onSave.calls, []);
    assert.equal(onSave.calledOnce(), false);
});

test('every call is recorded with its arguments, in order', () => {
    const addBook = createMock((books, book) => [...books, book]);
    addBook([], 'Dune');
    addBook(['Dune'], 'Emma');
    assert.deepEqual(addBook.calls, [
        [[], 'Dune'],
        [['Dune'], 'Emma'],
    ]);
});

test('calledOnce is true after exactly one call', () => {
    const onSave = createMock();
    onSave('Dune');
    assert.equal(onSave.calledOnce(), true);
    onSave('Emma');
    assert.equal(onSave.calledOnce(), false);
});

test('two mocks keep their own calls', () => {
    const first = createMock();
    const second = createMock();
    first('Dune');
    assert.deepEqual(first.calls, [['Dune']]);
    assert.deepEqual(second.calls, []);
});
