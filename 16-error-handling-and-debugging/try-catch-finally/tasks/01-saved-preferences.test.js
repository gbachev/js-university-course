import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadPreferences } = await import(
    process.env.SOLUTIONS ? '../solutions/01-saved-preferences.js' : './01-saved-preferences.js'
);

test('valid JSON gives the saved preferences', () => {
    assert.deepEqual(loadPreferences('{"theme":"dark","fontSize":18}'), {
        theme: 'dark',
        fontSize: 18
    });
});

test('broken JSON gives the defaults', () => {
    assert.deepEqual(loadPreferences('{theme: dark}'), { theme: 'light', fontSize: 16 });
});

test('an empty string gives the defaults', () => {
    assert.deepEqual(loadPreferences(''), { theme: 'light', fontSize: 16 });
});

test('plain words give the defaults', () => {
    assert.deepEqual(loadPreferences('dark theme'), { theme: 'light', fontSize: 16 });
});

test('a trailing comma gives the defaults', () => {
    const preferences = loadPreferences('{"theme":"dark",}');
    assert.deepEqual(preferences, { theme: 'light', fontSize: 16 });
});
