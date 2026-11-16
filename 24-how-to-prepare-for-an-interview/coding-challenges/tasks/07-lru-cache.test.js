import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { LruCache } = await import(
    process.env.SOLUTIONS ? '../solutions/07-lru-cache.js' : './07-lru-cache.js'
);

test('set and get an entry', () => {
    const recent = new LruCache(2);
    recent.set('dune', 'Dune');
    assert.equal(recent.get('dune'), 'Dune');
    assert.equal(recent.size, 1);
});

test('a missing key gives undefined', () => {
    const recent = new LruCache(2);
    assert.equal(recent.get('emma'), undefined);
});

test('when the cache is full, the entry used longest ago goes', () => {
    const recent = new LruCache(2);
    recent.set('dune', 'Dune');
    recent.set('emma', 'Emma');
    recent.set('ulysses', 'Ulysses');
    assert.equal(recent.get('dune'), undefined);
    assert.equal(recent.get('emma'), 'Emma');
    assert.equal(recent.get('ulysses'), 'Ulysses');
    assert.equal(recent.size, 2);
});

test('get() counts as a use, so the entry stays', () => {
    const recent = new LruCache(2);
    recent.set('dune', 'Dune');
    recent.set('emma', 'Emma');
    recent.get('dune');
    recent.set('ulysses', 'Ulysses');
    assert.equal(recent.get('dune'), 'Dune');
    assert.equal(recent.get('emma'), undefined);
});

test('updating a key changes its value, uses it and drops nothing', () => {
    const recent = new LruCache(2);
    recent.set('dune', 'Dune');
    recent.set('emma', 'Emma');
    recent.set('dune', 'Dune (2nd edition)');
    assert.equal(recent.size, 2);
    recent.set('ulysses', 'Ulysses');
    assert.equal(recent.get('dune'), 'Dune (2nd edition)');
    assert.equal(recent.get('emma'), undefined);
});

test('a cache of one keeps only the last entry', () => {
    const recent = new LruCache(1);
    recent.set('dune', 'Dune');
    recent.set('emma', 'Emma');
    assert.equal(recent.get('dune'), undefined);
    assert.equal(recent.get('emma'), 'Emma');
    assert.equal(recent.size, 1);
});
