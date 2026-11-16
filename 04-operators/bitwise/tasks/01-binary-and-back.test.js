import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toBinary, fromBinary } = await import(
    process.env.SOLUTIONS ? '../solutions/01-binary-and-back.js' : './01-binary-and-back.js'
);

test('11 is 1011 in binary', () => {
    assert.equal(toBinary(11), '1011');
});

test('9 is 1001 in binary', () => {
    assert.equal(toBinary(9), '1001');
});

test('zero is 0 in binary', () => {
    assert.equal(toBinary(0), '0');
});

test('1101 in binary is the number 13', () => {
    assert.equal(fromBinary('1101'), 13);
});

test('a number survives the trip to binary and back', () => {
    assert.equal(fromBinary(toBinary(2026)), 2026);
});
