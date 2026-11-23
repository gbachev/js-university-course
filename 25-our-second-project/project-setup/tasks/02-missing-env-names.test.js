import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { missingEnvNames } = await import(
    process.env.SOLUTIONS ? '../solutions/02-missing-env-names.js' : './02-missing-env-names.js'
);

const EXAMPLE = [
    '# Copy this file to .env and change what you need. .env stays out of Git.',
    'PORT=3000',
    'NODE_ENV=development',
    'DATABASE_PATH=./data/job-tracker.db',
    '# true or false. Leave it empty to get true in production and false otherwise.',
    'COOKIE_SECURE=',
    '',
].join('\n');

test('a name with no line in .env is missing', () => {
    assert.deepEqual(
        missingEnvNames('PORT=3000\nDATABASE_PATH=./data/job-tracker.db\n', 'PORT=4000\n'),
        ['DATABASE_PATH'],
    );
});

test('the names come back in the order of .env.example', () => {
    assert.deepEqual(missingEnvNames(EXAMPLE, 'NODE_ENV=development\n'), [
        'PORT',
        'DATABASE_PATH',
        'COOKIE_SECURE',
    ]);
});

test('comments and blank lines hold no name', () => {
    assert.deepEqual(missingEnvNames('\n# PORT=3000\n\nNODE_ENV=test\n', 'NODE_ENV=test\n'), []);
});

test('an empty value still counts as a line', () => {
    assert.deepEqual(missingEnvNames(EXAMPLE, 'COOKIE_SECURE=\nDATABASE_PATH=\nNODE_ENV=\nPORT=\n'), []);
});

test('the spaces around a name do not count', () => {
    assert.deepEqual(missingEnvNames('  PORT = 3000\nDEBUG=false\n', 'PORT=4000\n'), ['DEBUG']);
    assert.deepEqual(missingEnvNames('  PORT = 3000\nDEBUG=false\n', 'DEBUG=true\n'), ['PORT']);
    assert.deepEqual(missingEnvNames('PORT=3000\n', '  PORT = 4000\n'), []);
});

test('a comment in .env does not hold the name either', () => {
    assert.deepEqual(missingEnvNames('PORT=3000\n', '# PORT=4000\n'), ['PORT']);
});

test('Windows line endings work too', () => {
    assert.deepEqual(missingEnvNames('PORT=3000\r\nNODE_ENV=development\r\n', 'PORT=3000\r\n'), [
        'NODE_ENV',
    ]);
});

test('a line without = holds no name', () => {
    assert.deepEqual(missingEnvNames('PORT=3000\nexport\n', 'PORT=3000\n'), []);
});
