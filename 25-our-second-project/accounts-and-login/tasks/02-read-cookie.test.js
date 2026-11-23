import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { readCookie } = await import(
    process.env.SOLUTIONS ? '../solutions/02-read-cookie.js' : './02-read-cookie.js'
);

test('finds a cookie first, in the middle and last', () => {
    const header = 'theme=dark; sid=Kq3x-_9; lang=en';

    assert.equal(readCookie(header, 'theme'), 'dark');
    assert.equal(readCookie(header, 'sid'), 'Kq3x-_9');
    assert.equal(readCookie(header, 'lang'), 'en');
});

test('spaces around names and values do not count', () => {
    assert.equal(readCookie('  theme = dark ;sid=abc  ', 'theme'), 'dark');
    assert.equal(readCookie('  theme = dark ;sid=abc  ', 'sid'), 'abc');
});

test('gives null without the header or the cookie', () => {
    assert.equal(readCookie(undefined, 'sid'), null);
    assert.equal(readCookie('', 'sid'), null);
    assert.equal(readCookie('theme=dark', 'sid'), null);
});

test('matches the whole name, never a part of it', () => {
    assert.equal(readCookie('oldsid=abc; sid=xyz', 'sid'), 'xyz');
    assert.equal(readCookie('sid2=abc', 'sid'), null);
    assert.equal(readCookie('sid=abc', 'id'), null);
    assert.equal(readCookie('theme=sid; lang=en', 'sid'), null);
});

test('keeps an = inside the value', () => {
    assert.equal(readCookie('data=a=b', 'data'), 'a=b');
    assert.equal(readCookie('sid=abc==; lang=en', 'sid'), 'abc==');
});

test('skips a pair without = and returns an empty value as an empty string', () => {
    assert.equal(readCookie('flag; sid=abc', 'sid'), 'abc');
    assert.equal(readCookie('sid=; theme=dark', 'sid'), '');
});
