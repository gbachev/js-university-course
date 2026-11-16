import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { tap, makeSlugger } = await import(
    process.env.SOLUTIONS ? '../solutions/03-tap.js' : './03-tap.js'
);

test('tap returns a step that passes the value on unchanged', () => {
    const step = tap(() => {});
    assert.equal(typeof step, 'function');
    assert.equal(step('Dune'), 'Dune');
});

test('tap calls fn with the value', () => {
    const seen = [];
    tap((value) => seen.push(value))(42);
    assert.deepEqual(seen, [42]);
});

test('tap ignores what fn returns', () => {
    assert.equal(tap((x) => x * 2)(5), 5);
    assert.deepEqual(tap(() => undefined)([1, 2]), [1, 2]);
});

test('the slugger returns the slug', () => {
    assert.equal(makeSlugger([])('  The Hobbit '), 'the-hobbit');
});

test('the slugger logs the trimmed title, once per call', () => {
    const log = [];
    const toSlug = makeSlugger(log);
    toSlug('  The Hobbit ');
    toSlug('Jane Eyre');
    assert.deepEqual(log, ['The Hobbit', 'Jane Eyre']);
});
