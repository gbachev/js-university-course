import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countKeys } = await import(
    process.env.SOLUTIONS ? '../solutions/03-count-the-keys.js' : './03-count-the-keys.js'
);

test('an object with a string key and a symbol key', () => {
    const user = { name: 'Ada', [Symbol('id')]: 7 };
    assert.deepEqual(countKeys(user), { visible: 1, hidden: 1 });
});

test('an empty object has no keys', () => {
    assert.deepEqual(countKeys({}), { visible: 0, hidden: 0 });
});

test('an object with string keys only', () => {
    assert.deepEqual(countKeys({ title: 'JS', price: 20 }), { visible: 2, hidden: 0 });
});

test('an object with symbol keys only', () => {
    const settings = { [Symbol('theme')]: 'dark', [Symbol('theme')]: 'light' };
    assert.deepEqual(countKeys(settings), { visible: 0, hidden: 2 });
});
