import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createPlaylist } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-playlist-summary.js'
        : './03-playlist-summary.js'
);

test('lists the songs after the playlist name', () => {
    const playlist = createPlaylist('Road trip', ['Hey Jude', 'Africa']);
    assert.equal(playlist.summary(), 'Road trip: Hey Jude, Africa');
});

test('a playlist with one song has no comma', () => {
    const playlist = createPlaylist('Focus', ['Clair de Lune']);
    assert.equal(playlist.summary(), 'Focus: Clair de Lune');
});

test('a playlist without songs gives only the name and the colon', () => {
    assert.equal(createPlaylist('Empty', []).summary(), 'Empty: ');
});

test('the summary uses the name the playlist has now', () => {
    const playlist = createPlaylist('Road trip', ['Africa']);
    playlist.name = 'Summer';
    assert.equal(playlist.summary(), 'Summer: Africa');
});
