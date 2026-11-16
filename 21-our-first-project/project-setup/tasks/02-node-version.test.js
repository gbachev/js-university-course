import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { meetsNodeVersion } = await import(
    process.env.SOLUTIONS ? '../solutions/02-node-version.js' : './02-node-version.js'
);

test('a newer major version is new enough', () => {
    assert.equal(meetsNodeVersion('v26.1.0', '22.12'), true);
});

test('exactly the minimum version is new enough', () => {
    assert.equal(meetsNodeVersion('v22.12.0', '22.12'), true);
    assert.equal(meetsNodeVersion('v22.12.0', '22.12.0'), true);
});

test('an older minor version is not new enough', () => {
    assert.equal(meetsNodeVersion('v22.11.0', '22.12'), false);
});

test('minor versions are compared as numbers, not as text', () => {
    assert.equal(meetsNodeVersion('v22.9.0', '22.12'), false);
    assert.equal(meetsNodeVersion('v22.13.1', '22.9'), true);
});

test('an older major version is not new enough, whatever its minor version', () => {
    assert.equal(meetsNodeVersion('v20.19.0', '22.12'), false);
});

test('the patch version counts too', () => {
    assert.equal(meetsNodeVersion('v22.13.0', '22.13.1'), false);
    assert.equal(meetsNodeVersion('v22.13.2', '22.13.1'), true);
});
