import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { resetSetting } = await import(
    process.env.SOLUTIONS ? '../solutions/03-reset-setting.js' : './03-reset-setting.js'
);

function createSettings() {
    const defaults = { theme: 'light', language: 'en' };
    const settings = { theme: 'dark' };
    Object.setPrototypeOf(settings, defaults);
    return { defaults, settings };
}

test('a reset setting gives the default value', () => {
    const { settings } = createSettings();
    assert.equal(resetSetting(settings, 'theme'), 'light');
    assert.equal(settings.theme, 'light');
});

test('the reset removes the own property', () => {
    const { settings } = createSettings();
    resetSetting(settings, 'theme');
    assert.deepEqual(Object.keys(settings), []);
});

test('the defaults stay as they are', () => {
    const { defaults, settings } = createSettings();
    resetSetting(settings, 'theme');
    resetSetting(settings, 'language');
    assert.deepEqual(defaults, { theme: 'light', language: 'en' });
});

test('a setting the user never changed keeps its default', () => {
    const { settings } = createSettings();
    assert.equal(resetSetting(settings, 'language'), 'en');
});

test('a setting that exists nowhere gives undefined', () => {
    const { settings } = createSettings();
    assert.equal(resetSetting(settings, 'fontSize'), undefined);
});
