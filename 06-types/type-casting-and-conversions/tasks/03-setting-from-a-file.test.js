import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { toBoolean } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-setting-from-a-file.js'
        : './03-setting-from-a-file.js'
);

test('the string true gives true', () => {
    assert.equal(toBoolean('true'), true);
});

test('the string false gives false', () => {
    assert.equal(toBoolean('false'), false);
});

test('true in any letter case gives true', () => {
    assert.equal(toBoolean('TRUE'), true);
    assert.equal(toBoolean('True'), true);
});

test('any other text gives false', () => {
    assert.equal(toBoolean('no'), false);
    assert.equal(toBoolean('yes please'), false);
});

test('an empty setting gives false', () => {
    assert.equal(toBoolean(''), false);
});
