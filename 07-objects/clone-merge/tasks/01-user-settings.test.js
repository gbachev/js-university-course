import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { getSettings } = await import(
    process.env.SOLUTIONS ? '../solutions/01-user-settings.js' : './01-user-settings.js'
);

test('a setting the user chose wins over the default', () => {
    assert.deepEqual(getSettings({ theme: 'light', language: 'en' }, { theme: 'dark' }), {
        theme: 'dark',
        language: 'en',
    });
});

test('a user who chose nothing gets the defaults', () => {
    assert.deepEqual(getSettings({ theme: 'light', language: 'en' }, {}), {
        theme: 'light',
        language: 'en',
    });
});

test('a setting without a default is kept too', () => {
    assert.deepEqual(getSettings({ theme: 'light' }, { fontSize: 'large' }), {
        theme: 'light',
        fontSize: 'large',
    });
});

test('the defaults and the user preferences do not change', () => {
    const defaults = { theme: 'light', language: 'en' };
    const userPrefs = { theme: 'dark' };
    const settings = getSettings(defaults, userPrefs);
    assert.deepEqual(defaults, { theme: 'light', language: 'en' });
    assert.deepEqual(userPrefs, { theme: 'dark' });
    assert.notEqual(settings, defaults);
});
