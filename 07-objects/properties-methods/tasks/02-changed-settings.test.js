import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { countChangedSettings, defaultSettings } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-changed-settings.js'
        : './02-changed-settings.js'
);

test('a user who changed nothing has 0 changed settings', () => {
    assert.equal(countChangedSettings(Object.create(defaultSettings)), 0);
});

test('counts one changed setting', () => {
    const settings = Object.create(defaultSettings);
    settings.theme = 'dark';
    assert.equal(countChangedSettings(settings), 1);
});

test('counts every setting the user changed', () => {
    const settings = Object.create(defaultSettings);
    settings.theme = 'dark';
    settings.language = 'de';
    settings.notifications = false;
    assert.equal(countChangedSettings(settings), 3);
});

test('a new setting that has no default counts too', () => {
    const settings = Object.create(defaultSettings);
    settings.fontSize = 'large';
    assert.equal(countChangedSettings(settings), 1);
});
