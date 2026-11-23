import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readConfig } from '../src/config.js';

test('readConfig() gives the defaults for development', () => {
    assert.deepEqual(readConfig({}), {
        port: 3000,
        nodeEnv: 'development',
        databasePath: './data/job-tracker.db',
        cookieSecure: false,
    });
});

test('the cookie is Secure in production, unless COOKIE_SECURE says otherwise', () => {
    assert.equal(readConfig({ NODE_ENV: 'production' }).cookieSecure, true);
    assert.equal(
        readConfig({ NODE_ENV: 'production', COOKIE_SECURE: 'false' })
            .cookieSecure,
        false,
    );
    assert.equal(readConfig({ COOKIE_SECURE: 'true' }).cookieSecure, true);
});

test('readConfig() throws one error that lists every bad setting', () => {
    assert.throws(
        () =>
            readConfig({ PORT: 'abc', NODE_ENV: 'prod', COOKIE_SECURE: 'yes' }),
        {
            message: [
                'Cannot start the server:',
                '- PORT must be a whole number from 0 to 65535, not "abc"',
                '- NODE_ENV must be one of development, test, production, not "prod"',
                '- COOKIE_SECURE must be true or false, not "yes"',
            ].join('\n'),
        },
    );
});
