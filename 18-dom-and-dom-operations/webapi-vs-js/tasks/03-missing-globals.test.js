import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { missingGlobals } = await import(
    process.env.SOLUTIONS ? '../solutions/03-missing-globals.js' : './03-missing-globals.js'
);

test('Node.js has fetch and setTimeout but no document or alert', () => {
    assert.deepEqual(missingGlobals(['fetch', 'document', 'setTimeout', 'alert']), [
        'document',
        'alert',
    ]);
});

test('language built-ins exist in every host', () => {
    assert.deepEqual(missingGlobals(['Array', 'JSON', 'Promise', 'Math']), []);
});

test('an empty list of names has nothing missing', () => {
    assert.deepEqual(missingGlobals([]), []);
});

test('a global added by the host counts as present', () => {
    globalThis.document = {};
    try {
        assert.deepEqual(missingGlobals(['document', 'window']), ['window']);
    } finally {
        delete globalThis.document;
    }
});
