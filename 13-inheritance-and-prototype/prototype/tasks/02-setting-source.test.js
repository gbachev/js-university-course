import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { settingSource } = await import(
    process.env.SOLUTIONS ? '../solutions/02-setting-source.js' : './02-setting-source.js'
);

function createSettings() {
    const defaults = { theme: 'light', language: 'en', notifications: true };
    const settings = { theme: 'dark', notifications: false };
    Object.setPrototypeOf(settings, defaults);
    return settings;
}

test('a value the user set is custom', () => {
    assert.equal(settingSource(createSettings(), 'theme'), 'custom');
});

test('a value from the defaults is default', () => {
    assert.equal(settingSource(createSettings(), 'language'), 'default');
});

test('a custom value of false is still custom', () => {
    assert.equal(settingSource(createSettings(), 'notifications'), 'custom');
});

test('a key nobody in the chain has is missing', () => {
    assert.equal(settingSource(createSettings(), 'fontSize'), 'missing');
});

test('a value two links up the chain is default too', () => {
    const app = { currency: 'EUR' };
    const team = Object.setPrototypeOf({ language: 'de' }, app);
    const settings = Object.setPrototypeOf({}, team);
    assert.equal(settingSource(settings, 'currency'), 'default');
});
