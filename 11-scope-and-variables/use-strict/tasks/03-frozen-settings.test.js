import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { withTheme } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-frozen-settings.js'
        : './03-frozen-settings.js'
);

test('the result has the new theme and the other settings', () => {
    const settings = Object.freeze({ theme: 'dark', language: 'en' });
    assert.deepEqual(withTheme(settings, 'light'), { theme: 'light', language: 'en' });
});

test('a frozen settings object stays as it was', () => {
    const settings = Object.freeze({ theme: 'dark', language: 'en' });
    withTheme(settings, 'light');
    assert.deepEqual(settings, { theme: 'dark', language: 'en' });
});

test('a settings object that is not frozen is not changed either', () => {
    const settings = { theme: 'dark', fontSize: 16 };
    const result = withTheme(settings, 'light');
    assert.equal(settings.theme, 'dark');
    assert.deepEqual(result, { theme: 'light', fontSize: 16 });
});

test('settings without a theme get one', () => {
    assert.deepEqual(withTheme(Object.freeze({ language: 'bg' }), 'dark'), {
        language: 'bg',
        theme: 'dark',
    });
});
