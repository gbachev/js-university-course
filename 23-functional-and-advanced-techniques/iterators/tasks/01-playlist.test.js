import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Playlist } = await import(
    process.env.SOLUTIONS ? '../solutions/01-playlist.js' : './01-playlist.js'
);

test('for...of goes over the songs in order', () => {
    const played = [];
    for (const song of new Playlist('Intro', 'Blue', 'Outro')) {
        played.push(song);
    }
    assert.deepEqual(played, ['Intro', 'Blue', 'Outro']);
});

test('spread and destructuring work on the playlist', () => {
    const playlist = new Playlist('Intro', 'Blue', 'Outro');
    assert.deepEqual([...playlist], ['Intro', 'Blue', 'Outro']);
    const [opener, second] = playlist;
    assert.equal(opener, 'Intro');
    assert.equal(second, 'Blue');
});

test('next() returns { value, done } results and then done: true', () => {
    const iterator = new Playlist('Intro', 'Blue')[Symbol.iterator]();
    assert.deepEqual(iterator.next(), { value: 'Intro', done: false });
    assert.deepEqual(iterator.next(), { value: 'Blue', done: false });
    assert.deepEqual(iterator.next(), { value: undefined, done: true });
    assert.deepEqual(iterator.next(), { value: undefined, done: true });
});

test('every loop starts from the first song again', () => {
    const playlist = new Playlist('Intro', 'Blue');
    assert.deepEqual([...playlist], ['Intro', 'Blue']);
    assert.deepEqual([...playlist], ['Intro', 'Blue']);
});

test('an empty playlist gives no songs', () => {
    assert.deepEqual([...new Playlist()], []);
});
