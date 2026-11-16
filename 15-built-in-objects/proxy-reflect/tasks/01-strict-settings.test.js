import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { strictSettings } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-strict-settings.js'
        : './01-strict-settings.js'
);

function createSettings() {
    return { theme: 'light', fontSize: 16, notifications: true };
}

test('reads go through to the settings object', () => {
    const settings = strictSettings(createSettings());
    assert.equal(settings.theme, 'light');
    assert.equal(settings.fontSize, 16);
});

test('a valid write is stored on the original object', () => {
    const original = createSettings();
    const settings = strictSettings(original);
    settings.fontSize = 18;
    settings.notifications = false;
    assert.equal(original.fontSize, 18);
    assert.equal(original.notifications, false);
});

test('an unknown key throws and is not added', () => {
    const original = createSettings();
    const settings = strictSettings(original);
    assert.throws(() => {
        settings.fontSzie = 18;
    }, { name: 'TypeError', message: 'Unknown setting: fontSzie' });
    assert.equal(Object.hasOwn(original, 'fontSzie'), false);
});

test('a value of the wrong type throws and keeps the old value', () => {
    const original = createSettings();
    const settings = strictSettings(original);
    assert.throws(() => {
        settings.fontSize = '18';
    }, { name: 'TypeError', message: 'fontSize must be a number' });
    assert.throws(() => {
        settings.notifications = 'yes';
    }, { name: 'TypeError', message: 'notifications must be a boolean' });
    assert.equal(original.fontSize, 16);
    assert.equal(original.notifications, true);
});

test('an object setting asks for an object', () => {
    const settings = strictSettings({ layout: { columns: 2 } });
    assert.throws(() => {
        settings.layout = 'wide';
    }, { name: 'TypeError', message: 'layout must be an object' });
});

test('a key from the prototype, like toString, is not a setting', () => {
    const settings = strictSettings(createSettings());
    assert.throws(() => {
        settings.toString = () => 'settings';
    }, { name: 'TypeError', message: 'Unknown setting: toString' });
});
