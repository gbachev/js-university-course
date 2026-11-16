import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createStore } = await import(
    process.env.SOLUTIONS ? '../solutions/03-store.js' : './03-store.js'
);

test('state starts with the values we pass in', () => {
    const { state } = createStore({ query: '', page: 1 });
    assert.equal(state.query, '');
    assert.equal(state.page, 1);
});

test('a write saves the value and calls the subscriber with state and property', () => {
    const { state, subscribe } = createStore({ query: '' });
    const calls = [];
    const seen = [];
    subscribe((current, prop) => calls.push([prop, current[prop]]));
    subscribe((current) => seen.push(current === state));
    state.query = 'dune';
    assert.equal(state.query, 'dune');
    assert.deepEqual(calls, [['query', 'dune']]);
    assert.deepEqual(seen, [true]);
});

test('every subscriber runs on a change', () => {
    const { state, subscribe } = createStore({ page: 1 });
    const seen = [];
    subscribe(() => seen.push('list'));
    subscribe(() => seen.push('counts'));
    state.page = 2;
    assert.deepEqual(seen, ['list', 'counts']);
});

test('writing the same value again calls no one', () => {
    const { state, subscribe } = createStore({ query: 'dune' });
    let calls = 0;
    subscribe(() => {
        calls += 1;
    });
    state.query = 'dune';
    assert.equal(calls, 0);
});

test('NaN written over NaN calls no one', () => {
    const { state, subscribe } = createStore({ rating: NaN });
    let calls = 0;
    subscribe(() => {
        calls += 1;
    });
    state.rating = NaN;
    assert.equal(calls, 0);
});

test('a new array counts as a change, the same array does not', () => {
    const books = [];
    const { state, subscribe } = createStore({ books });
    let calls = 0;
    subscribe(() => {
        calls += 1;
    });
    state.books = books;
    state.books = [...books, { key: 'dune', title: 'Dune' }];
    assert.equal(calls, 1);
});

test('the function subscribe returns stops that listener only', () => {
    const { state, subscribe } = createStore({ page: 1 });
    const seen = [];
    const stop = subscribe(() => seen.push('list'));
    subscribe(() => seen.push('counts'));
    stop();
    state.page = 2;
    assert.deepEqual(seen, ['counts']);
});
