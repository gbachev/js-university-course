import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { newestVersion } = await import(
    process.env.SOLUTIONS ? '../solutions/02-newest-version.js' : './02-newest-version.js'
);

test('a higher major wins', () => {
    assert.equal(newestVersion(['5.1.16', '6.0.2', '6.0.0']), '6.0.2');
});

test('a patch of 10 is newer than a patch of 9', () => {
    assert.equal(newestVersion(['5.1.9', '5.1.10', '5.0.4']), '5.1.10');
});

test('a minor of 10 is newer than a minor of 2', () => {
    assert.equal(newestVersion(['8.2.9', '8.10.0', '8.3.8']), '8.10.0');
});

test('one version is the newest', () => {
    assert.equal(newestVersion(['1.0.0']), '1.0.0');
});

test('an empty list has no newest version', () => {
    assert.equal(newestVersion([]), null);
});

test('the list itself is not changed', () => {
    const versions = ['5.1.9', '5.1.10'];
    newestVersion(versions);
    assert.deepEqual(versions, ['5.1.9', '5.1.10']);
});
