import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { parseId } = await import(
    process.env.SOLUTIONS ? '../solutions/02-parse-id.js' : './02-parse-id.js'
);

test('a whole number in digits is an id', () => {
    assert.equal(parseId('7'), 7);
    assert.equal(parseId('1234'), 1234);
    assert.equal(parseId('9007199254740991'), 9007199254740991);
});

test('text that is not a number is null', () => {
    for (const text of ['abc', '', 'seven', '7abc', '12abc']) {
        assert.equal(parseId(text), null, text);
    }
});

test('numbers that are not whole and positive are null', () => {
    for (const text of ['1.5', '-1', '+7', '7.0']) {
        assert.equal(parseId(text), null, text);
    }
});

test('other ways of writing a number are null', () => {
    for (const text of ['1e3', '0x10', '0b11', ' 7', '7 ', 'Infinity', '1_000']) {
        assert.equal(parseId(text), null, text);
    }
});

test('a number too long to keep exactly is null', () => {
    assert.equal(parseId('9007199254740992'), null);
    assert.equal(parseId('99999999999999999999'), null);
});
