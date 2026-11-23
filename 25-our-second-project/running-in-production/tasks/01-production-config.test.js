import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { readProductionConfig } = await import(
    process.env.SOLUTIONS ? '../solutions/01-production-config.js' : './01-production-config.js'
);

// The message of the error readProductionConfig(env) throws, or null when it returns.
function problemsOf(env) {
    try {
        readProductionConfig(env);
        return null;
    } catch (error) {
        return error.message;
    }
}

test('outside production the defaults are fine', () => {
    assert.deepEqual(readProductionConfig({}), {
        nodeEnv: 'development',
        port: 3000,
        databasePath: './data/job-tracker.db',
    });
});

test('outside production a relative path or :memory: is fine', () => {
    assert.equal(
        readProductionConfig({ NODE_ENV: 'development', DATABASE_PATH: './tmp/dev.db' }).databasePath,
        './tmp/dev.db',
    );
    assert.equal(readProductionConfig({ NODE_ENV: 'test', DATABASE_PATH: ':memory:' }).databasePath, ':memory:');
});

test('in production an absolute path on the disk is accepted', () => {
    assert.deepEqual(
        readProductionConfig({ NODE_ENV: 'production', PORT: '8080', DATABASE_PATH: '/var/data/job-tracker.db' }),
        { nodeEnv: 'production', port: 8080, databasePath: '/var/data/job-tracker.db' },
    );
});

test('in production a missing or empty DATABASE_PATH stops the start', () => {
    const message = 'Cannot start the server:\n- DATABASE_PATH must be set in production';
    assert.equal(problemsOf({ NODE_ENV: 'production' }), message);
    assert.equal(problemsOf({ NODE_ENV: 'production', DATABASE_PATH: '' }), message);
});

test('in production a relative path stops the start, and so does :memory:', () => {
    assert.equal(
        problemsOf({ NODE_ENV: 'production', DATABASE_PATH: './data/job-tracker.db' }),
        'Cannot start the server:\n- DATABASE_PATH must be an absolute path in production, not "./data/job-tracker.db"',
    );
    assert.equal(
        problemsOf({ NODE_ENV: 'production', DATABASE_PATH: ':memory:' }),
        'Cannot start the server:\n- DATABASE_PATH must be an absolute path in production, not ":memory:"',
    );
});

test('a bad PORT is a problem in every mode', () => {
    assert.equal(
        problemsOf({ PORT: '70000' }),
        'Cannot start the server:\n- PORT must be a whole number from 0 to 65535, not "70000"',
    );
    assert.equal(problemsOf({ NODE_ENV: 'production', PORT: '0', DATABASE_PATH: '/data/app.db' }), null);
});

test('every problem is listed in one error, PORT first', () => {
    assert.equal(
        problemsOf({ NODE_ENV: 'production', PORT: 'abc' }),
        'Cannot start the server:\n- PORT must be a whole number from 0 to 65535, not "abc"\n- DATABASE_PATH must be set in production',
    );
});
