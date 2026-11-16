import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadSettings } = await import(
    process.env.SOLUTIONS ? '../solutions/03-load-settings.js' : './03-load-settings.js'
);

const defaults = { theme: 'light', pageSize: 20 };

test('saved settings are read back', () => {
    assert.deepEqual(loadSettings('{"theme":"dark","pageSize":50}'), {
        theme: 'dark',
        pageSize: 50,
    });
    assert.deepEqual(loadSettings('{"pageSize":1}'), { theme: 'light', pageSize: 1 });
    assert.deepEqual(loadSettings('{"pageSize":100}'), { theme: 'light', pageSize: 100 });
});

test('nothing saved gives the defaults', () => {
    assert.deepEqual(loadSettings(null), defaults);
});

test('text that is not valid JSON gives the defaults without throwing', () => {
    assert.doesNotThrow(() => loadSettings('{oops'));
    assert.deepEqual(loadSettings('{oops'), defaults);
});

test('JSON that is not an object gives the defaults', () => {
    assert.deepEqual(loadSettings('null'), defaults);
    assert.deepEqual(loadSettings('"dark"'), defaults);
    assert.deepEqual(loadSettings('42'), defaults);
});

test('an unknown theme falls back to light and keeps a good page size', () => {
    assert.deepEqual(loadSettings('{"theme":"blue","pageSize":50}'), {
        theme: 'light',
        pageSize: 50,
    });
});

test('a page size that is a string, a fraction or out of range falls back to 20', () => {
    assert.deepEqual(loadSettings('{"theme":"dark","pageSize":"50"}'), {
        theme: 'dark',
        pageSize: 20,
    });
    assert.deepEqual(loadSettings('{"pageSize":2.5}'), defaults);
    assert.deepEqual(loadSettings('{"pageSize":0}'), defaults);
    assert.deepEqual(loadSettings('{"pageSize":500}'), defaults);
});

test('a missing value falls back to its default', () => {
    assert.deepEqual(loadSettings('{"theme":"dark"}'), { theme: 'dark', pageSize: 20 });
    assert.deepEqual(loadSettings('{}'), defaults);
});
