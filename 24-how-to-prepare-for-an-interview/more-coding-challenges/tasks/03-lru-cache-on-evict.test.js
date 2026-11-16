import { test, mock } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { LRUCache } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-lru-cache-on-evict.js'
        : './03-lru-cache-on-evict.js'
);

test('set and get an entry, and a missing key gives undefined', () => {
    const covers = new LRUCache(2);
    covers.set('dune', 'dune.jpg');
    assert.equal(covers.get('dune'), 'dune.jpg');
    assert.equal(covers.get('emma'), undefined);
    assert.equal(covers.size, 1);
});

test('when the cache is full, onEvict gets the key and value used longest ago', () => {
    const onEvict = mock.fn();
    const covers = new LRUCache(2, onEvict);
    covers.set('dune', 'dune.jpg');
    covers.set('emma', 'emma.jpg');
    covers.get('dune');
    covers.set('ulysses', 'ulysses.jpg');
    assert.equal(onEvict.mock.callCount(), 1);
    assert.deepEqual(onEvict.mock.calls[0].arguments, ['emma', 'emma.jpg']);
    assert.equal(covers.get('emma'), undefined);
    assert.equal(covers.get('dune'), 'dune.jpg');
    assert.equal(covers.size, 2);
});

test('updating a key or reading one never calls onEvict', () => {
    const onEvict = mock.fn();
    const covers = new LRUCache(2, onEvict);
    covers.set('dune', 'dune.jpg');
    covers.set('emma', 'emma.jpg');
    covers.set('dune', 'dune-2nd.jpg');
    covers.get('emma');
    covers.get('ulysses');
    assert.equal(onEvict.mock.callCount(), 0);
    assert.equal(covers.get('dune'), 'dune-2nd.jpg');
});

test('updating a key counts as a use, so the other entry goes first', () => {
    const onEvict = mock.fn();
    const covers = new LRUCache(2, onEvict);
    covers.set('dune', 'dune.jpg');
    covers.set('emma', 'emma.jpg');
    covers.set('dune', 'dune-2nd.jpg');
    covers.set('ulysses', 'ulysses.jpg');
    assert.deepEqual(onEvict.mock.calls[0].arguments, ['emma', 'emma.jpg']);
});

test('the entry is already gone when onEvict runs', () => {
    const seen = [];
    const covers = new LRUCache(1, (key) => {
        seen.push([key, covers.size, covers.get(key)]);
    });
    covers.set('dune', 'dune.jpg');
    covers.set('emma', 'emma.jpg');
    assert.deepEqual(seen, [['dune', 1, undefined]]);
});

test('without onEvict the cache still drops the oldest entry', () => {
    const covers = new LRUCache(1);
    covers.set('dune', 'dune.jpg');
    covers.set('emma', 'emma.jpg');
    assert.equal(covers.get('dune'), undefined);
    assert.equal(covers.get('emma'), 'emma.jpg');
    assert.equal(covers.size, 1);
});

test('a cached 0 is a hit and counts as a use', () => {
    const onEvict = mock.fn();
    const stock = new LRUCache(2, onEvict);
    stock.set('dune', 0);
    stock.set('emma', 4);
    assert.equal(stock.get('dune'), 0);
    stock.set('ulysses', 2);
    assert.deepEqual(onEvict.mock.calls[0].arguments, ['emma', 4]);
});

test("a cached '' is a hit and counts as a use", () => {
    const onEvict = mock.fn();
    const notes = new LRUCache(2, onEvict);
    notes.set('dune', '');
    notes.set('emma', 'Reread');
    assert.equal(notes.get('dune'), '');
    notes.set('ulysses', 'Long');
    assert.deepEqual(onEvict.mock.calls[0].arguments, ['emma', 'Reread']);
});
