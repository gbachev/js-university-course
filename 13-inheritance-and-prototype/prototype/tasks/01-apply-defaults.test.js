import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { applyDefaults } = await import(
    process.env.SOLUTIONS ? '../solutions/01-apply-defaults.js' : './01-apply-defaults.js'
);

test('returns the same settings object', () => {
    const settings = { theme: 'dark' };
    assert.equal(applyDefaults(settings, { theme: 'light' }), settings);
});

test('the defaults become the prototype of the settings', () => {
    const defaults = { theme: 'light' };
    const settings = applyDefaults({ theme: 'dark' }, defaults);
    assert.equal(Object.getPrototypeOf(settings), defaults);
});

test('a value the user changed wins over the default', () => {
    const settings = applyDefaults({ theme: 'dark' }, { theme: 'light', language: 'en' });
    assert.equal(settings.theme, 'dark');
});

test('a value the user did not change comes from the defaults', () => {
    const settings = applyDefaults({ theme: 'dark' }, { theme: 'light', language: 'en' });
    assert.equal(settings.language, 'en');
});

test('nothing is copied: the settings keep only their own keys', () => {
    const settings = applyDefaults({ theme: 'dark' }, { theme: 'light', language: 'en' });
    assert.deepEqual(Object.keys(settings), ['theme']);
});

test('a default changed later shows through', () => {
    const defaults = { language: 'en' };
    const settings = applyDefaults({}, defaults);
    defaults.language = 'de';
    assert.equal(settings.language, 'de');
});
