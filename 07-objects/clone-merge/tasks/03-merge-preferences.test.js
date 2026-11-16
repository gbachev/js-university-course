import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { mergePreferences } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-merge-preferences.js'
        : './03-merge-preferences.js'
);

function createDefaults() {
    return {
        display: { theme: 'light', fontSize: 14 },
        notifications: { email: true, sms: false },
        language: 'en',
    };
}

test('a changed setting in a group keeps the other settings of that group', () => {
    assert.deepEqual(mergePreferences(createDefaults(), { display: { theme: 'dark' } }), {
        display: { theme: 'dark', fontSize: 14 },
        notifications: { email: true, sms: false },
        language: 'en',
    });
});

test('a value that is not a group is replaced', () => {
    const merged = mergePreferences(createDefaults(), { language: 'de' });
    assert.equal(merged.language, 'de');
});

test('changes in two groups are both merged', () => {
    const merged = mergePreferences(createDefaults(), {
        display: { fontSize: 18 },
        notifications: { sms: true },
    });
    assert.deepEqual(merged.display, { theme: 'light', fontSize: 18 });
    assert.deepEqual(merged.notifications, { email: true, sms: true });
});

test('a new group without defaults is added', () => {
    const merged = mergePreferences(createDefaults(), { privacy: { showEmail: false } });
    assert.deepEqual(merged.privacy, { showEmail: false });
});

test('the defaults do not change', () => {
    const defaults = createDefaults();
    mergePreferences(defaults, { display: { theme: 'dark' }, language: 'de' });
    assert.deepEqual(defaults, createDefaults());
});
