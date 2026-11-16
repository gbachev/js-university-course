import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { withBase } = await import(
    process.env.SOLUTIONS ? '../solutions/03-with-base.js' : './03-with-base.js'
);

test('a root path gets the subfolder in front', () => {
    assert.equal(
        withBase('/assets/index-DMkG4l_N.js', '/reading-list/'),
        '/reading-list/assets/index-DMkG4l_N.js',
    );
});

test('a base without a / at the end gives the same result', () => {
    assert.equal(withBase('/favicon.svg', '/reading-list'), '/reading-list/favicon.svg');
});

test('a base of / changes nothing', () => {
    assert.equal(withBase('/favicon.svg', '/'), '/favicon.svg');
});

test('full URLs stay as they are', () => {
    const cover = 'https://covers.openlibrary.org/b/id/11481354-S.jpg';
    assert.equal(withBase(cover, '/reading-list/'), cover);
    const local = 'http://localhost:4173/';
    assert.equal(withBase(local, '/reading-list/'), local);
});

test('relative paths stay as they are', () => {
    assert.equal(withBase('assets/index.css', '/reading-list/'), 'assets/index.css');
});
