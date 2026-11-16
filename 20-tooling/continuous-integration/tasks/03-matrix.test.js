import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { checkNames } = await import(
    process.env.SOLUTIONS ? '../solutions/03-matrix.js' : './03-matrix.js'
);

test('one key gives one check per value', () => {
    assert.deepEqual(checkNames('check', { 'node-version': [24, 26] }), [
        'check (24)',
        'check (26)',
    ]);
});

test('the job name is used as given', () => {
    assert.deepEqual(checkNames('test', { 'node-version': [26] }), ['test (26)']);
});

test('two keys give every combination, in order', () => {
    const matrix = { 'node-version': [24, 26], os: ['ubuntu-latest', 'windows-latest'] };
    assert.deepEqual(checkNames('check', matrix), [
        'check (24, ubuntu-latest)',
        'check (24, windows-latest)',
        'check (26, ubuntu-latest)',
        'check (26, windows-latest)',
    ]);
});

test('three keys work the same way', () => {
    const matrix = {
        'node-version': [24, 26],
        os: ['ubuntu-latest'],
        browser: ['chrome', 'firefox'],
    };
    assert.deepEqual(checkNames('e2e', matrix), [
        'e2e (24, ubuntu-latest, chrome)',
        'e2e (24, ubuntu-latest, firefox)',
        'e2e (26, ubuntu-latest, chrome)',
        'e2e (26, ubuntu-latest, firefox)',
    ]);
});

test('without a matrix there is one check, named like the job', () => {
    assert.deepEqual(checkNames('check', {}), ['check']);
});
