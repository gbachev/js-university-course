import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isEqual } = await import(
    process.env.SOLUTIONS ? '../solutions/03-to-equal.js' : './03-to-equal.js'
);

const dune = { key: '/works/OL893414W', title: 'Dune' };

test('primitives compare like Object.is', () => {
    assert.equal(isEqual('Dune', 'Dune'), true);
    assert.equal(isEqual(1, '1'), false);
    assert.equal(isEqual(NaN, NaN), true);
    assert.equal(isEqual(null, undefined), false);
});

test('a copy of an object has equal contents', () => {
    assert.equal(isEqual({ ...dune, read: false }, { ...dune, read: false }), true);
    assert.equal(
        isEqual({ title: 'Dune', read: false }, { read: false, title: 'Dune' }),
        true,
    );
});

test('a missing or different key makes objects different', () => {
    assert.equal(isEqual({ ...dune, read: false }, dune), false);
    assert.equal(isEqual(dune, { ...dune, read: false }), false);
    assert.equal(isEqual({ ...dune, read: false }, { ...dune, read: true }), false);
});

test('arrays compare item by item', () => {
    assert.equal(isEqual(['Dune', 'Emma'], ['Dune', 'Emma']), true);
    assert.equal(isEqual(['Dune', 'Emma'], ['Emma', 'Dune']), false);
    assert.equal(isEqual(['Dune'], ['Dune', 'Emma']), false);
});

test('nested arrays and objects are compared all the way down', () => {
    const books = [{ ...dune, read: false, tags: ['sci-fi'] }];
    assert.equal(isEqual(books, [{ ...dune, read: false, tags: ['sci-fi'] }]), true);
    assert.equal(isEqual(books, [{ ...dune, read: false, tags: ['classic'] }]), false);
});

test('an array is not equal to an object, and null is not an object', () => {
    assert.equal(isEqual([], {}), false);
    assert.equal(isEqual({ 0: 'Dune', length: 1 }, ['Dune']), false);
    assert.equal(isEqual(null, {}), false);
});
