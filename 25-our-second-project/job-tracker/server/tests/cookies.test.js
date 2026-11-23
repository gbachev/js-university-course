import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readCookie } from '../src/auth/cookies.js';

test('readCookie finds one cookie among several', () => {
    const header = 'theme=dark; sid=Kq3x-_9; lang=en';

    assert.equal(readCookie(header, 'sid'), 'Kq3x-_9');
    assert.equal(readCookie(header, 'theme'), 'dark');
});

test('readCookie gives null without the header or the cookie', () => {
    assert.equal(readCookie(undefined, 'sid'), null);
    assert.equal(readCookie('', 'sid'), null);
    assert.equal(readCookie('theme=dark', 'sid'), null);
});

test('readCookie matches the whole name, not a part of it', () => {
    assert.equal(readCookie('oldsid=abc; sid=xyz', 'sid'), 'xyz');
});

test('readCookie keeps an = inside the value', () => {
    assert.equal(readCookie('data=a=b', 'data'), 'a=b');
});
