import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { missingSettings } = await import(
    process.env.SOLUTIONS ? '../solutions/01-missing-settings.js' : './01-missing-settings.js'
);

test('a name that is not set is missing', () => {
    assert.deepEqual(missingSettings({ PORT: '3000' }, ['PORT', 'BOOKS_API_KEY']), ['BOOKS_API_KEY']);
});

test('an empty string is missing, while "0" and "false" are set', () => {
    const env = { PORT: '', DEBUG: '0', CACHE: 'false' };

    assert.deepEqual(missingSettings(env, ['DEBUG', 'PORT', 'CACHE', 'HOST']), ['PORT', 'HOST']);
});

test('the names come back in the order of names', () => {
    assert.deepEqual(missingSettings({}, ['C', 'A', 'B']), ['C', 'A', 'B']);
});

test('nothing missing gives an empty array', () => {
    assert.deepEqual(missingSettings({ PORT: '3000', BOOKS_API_KEY: 'dev-key' }, ['PORT', 'BOOKS_API_KEY']), []);
});

test('only the given env is read, not process.env', () => {
    process.env.COURSE_TASK_SETTING = 'set in process.env';
    try {
        assert.deepEqual(missingSettings({}, ['COURSE_TASK_SETTING']), ['COURSE_TASK_SETTING']);
    } finally {
        delete process.env.COURSE_TASK_SETTING;
    }
});

test('env and names stay as they were', () => {
    const env = Object.freeze({ PORT: '' });
    const names = Object.freeze(['PORT', 'HOST']);

    assert.deepEqual(missingSettings(env, names), ['PORT', 'HOST']);
});
