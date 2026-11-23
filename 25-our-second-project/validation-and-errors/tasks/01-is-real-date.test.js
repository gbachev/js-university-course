import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isRealDate } = await import(
    process.env.SOLUTIONS ? '../solutions/01-is-real-date.js' : './01-is-real-date.js'
);

test('a day that exists is true', () => {
    for (const text of ['2026-11-23', '2026-01-01', '2026-12-31', '2028-02-29', '2000-02-29']) {
        assert.equal(isRealDate(text), true, text);
    }
});

test('a day that does not exist is false, even though new Date() takes it', () => {
    for (const text of ['2026-02-30', '2026-02-29', '2026-04-31', '2100-02-29', '2026-11-31']) {
        assert.equal(isRealDate(text), false, text);
    }
});

test('a month or day out of range is false', () => {
    for (const text of ['2026-13-01', '2026-00-10', '2026-11-00', '2026-11-32']) {
        assert.equal(isRealDate(text), false, text);
    }
});

test('any other shape is false', () => {
    for (const text of [
        '2026-1-5',
        '2026/11/23',
        '23.11.2026',
        '2026-11-23T10:00',
        ' 2026-11-23',
        '2026-11-23 ',
        'Nov 23 2026',
        '',
    ]) {
        assert.equal(isRealDate(text), false, text);
    }
});

test('a value that is not text is false', () => {
    for (const value of [20261123, null, undefined, {}, ['2026-11-23']]) {
        assert.equal(isRealDate(value), false, String(value));
    }
});
