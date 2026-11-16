import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { withDefaults } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-preferences-with-defaults.js'
        : './02-preferences-with-defaults.js'
);

const defaults = { theme: 'light', fontSize: 16, notifications: true, sidebarWidth: 240 };

test('a saved value wins over the default', () => {
    const prefs = withDefaults({ theme: 'dark' }, defaults);
    assert.equal(prefs.theme, 'dark');
});

test('a missing key falls back to the default', () => {
    const prefs = withDefaults({ theme: 'dark' }, defaults);
    assert.equal(prefs.fontSize, 16);
    assert.equal(prefs.notifications, true);
});

test('a saved false, 0 or null is kept', () => {
    const prefs = withDefaults(
        { notifications: false, sidebarWidth: 0, fontSize: null },
        defaults,
    );
    assert.equal(prefs.notifications, false);
    assert.equal(prefs.sidebarWidth, 0);
    assert.equal(prefs.fontSize, null);
});

test('the in operator sees saved keys and default keys', () => {
    const prefs = withDefaults({ theme: 'dark', compactMode: true }, defaults);
    assert.equal('theme' in prefs, true);
    assert.equal('compactMode' in prefs, true);
    assert.equal('fontSize' in prefs, true);
    assert.equal('language' in prefs, false);
});

test('Object.keys lists only the saved keys', () => {
    const prefs = withDefaults({ theme: 'dark' }, defaults);
    assert.deepEqual(Object.keys(prefs), ['theme']);
});

test('deleting a saved value brings the default back', () => {
    const prefs = withDefaults({ notifications: false }, defaults);
    delete prefs.notifications;
    assert.equal(prefs.notifications, true);
});
