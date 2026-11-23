import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { readConfig } = await import(
    process.env.SOLUTIONS ? '../solutions/02-read-config.js' : './02-read-config.js'
);

// Checks that readConfig(env) throws an Error whose message names every bad setting
// in bad, and none of the settings in good.
function assertBadSettings(env, bad, good = []) {
    assert.throws(
        () => readConfig(env),
        (error) => {
            assert.ok(error instanceof Error, 'readConfig should throw an Error');
            for (const name of bad) {
                assert.ok(error.message.includes(name), `the message should name ${name}: ${error.message}`);
            }
            for (const name of good) {
                assert.ok(!error.message.includes(name), `the message should not name ${name}: ${error.message}`);
            }
            return true;
        },
    );
}

test('defaults for a missing PORT and NODE_ENV', () => {
    assert.deepEqual(readConfig({ BOOKS_API_KEY: 'dev-key' }), {
        port: 3000,
        nodeEnv: 'development',
        apiKey: 'dev-key',
    });
});

test('an empty PORT and NODE_ENV also get the defaults', () => {
    assert.deepEqual(readConfig({ PORT: '', NODE_ENV: '', BOOKS_API_KEY: 'dev-key' }), {
        port: 3000,
        nodeEnv: 'development',
        apiKey: 'dev-key',
    });
});

test('the values that are given, with PORT as a number', () => {
    const config = readConfig({ PORT: '8080', NODE_ENV: 'production', BOOKS_API_KEY: 'live-key' });

    assert.deepEqual(config, { port: 8080, nodeEnv: 'production', apiKey: 'live-key' });
    assert.equal(typeof config.port, 'number');
});

test('PORT "0" stays 0, and NODE_ENV "test" is allowed', () => {
    assert.deepEqual(readConfig({ PORT: '0', NODE_ENV: 'test', BOOKS_API_KEY: 'dev-key' }), {
        port: 0,
        nodeEnv: 'test',
        apiKey: 'dev-key',
    });
});

test('a bad PORT throws an Error that names PORT', () => {
    for (const PORT of ['abc', '-1', '3.5', '70000']) {
        assertBadSettings({ PORT, BOOKS_API_KEY: 'dev-key' }, ['PORT'], ['NODE_ENV', 'BOOKS_API_KEY']);
    }
});

test('an unknown NODE_ENV throws an Error that names NODE_ENV', () => {
    assertBadSettings({ NODE_ENV: 'prod', BOOKS_API_KEY: 'dev-key' }, ['NODE_ENV'], ['PORT', 'BOOKS_API_KEY']);
});

test('a missing or empty BOOKS_API_KEY throws an Error that names it', () => {
    assertBadSettings({ PORT: '3000' }, ['BOOKS_API_KEY'], ['PORT', 'NODE_ENV']);
    assertBadSettings({ BOOKS_API_KEY: '' }, ['BOOKS_API_KEY'], ['PORT', 'NODE_ENV']);
});

test('one Error names every bad setting at once', () => {
    assertBadSettings({ PORT: 'abc', NODE_ENV: 'prod' }, ['PORT', 'NODE_ENV', 'BOOKS_API_KEY']);
});

test('only the given env is read, not process.env', () => {
    const saved = process.env.PORT;
    process.env.PORT = '9999';
    try {
        assert.equal(readConfig({ BOOKS_API_KEY: 'dev-key' }).port, 3000);
    } finally {
        if (saved === undefined) {
            delete process.env.PORT;
        } else {
            process.env.PORT = saved;
        }
    }
});

test('env stays as it was', () => {
    const env = Object.freeze({ PORT: '', BOOKS_API_KEY: 'dev-key' });

    assert.equal(readConfig(env).port, 3000);
    assert.deepEqual(env, { PORT: '', BOOKS_API_KEY: 'dev-key' });
});
