import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isSupported } = await import(
    process.env.SOLUTIONS ? '../solutions/02-supported-engine.js' : './02-supported-engine.js'
);

test('a newer major is supported', () => {
    assert.equal(isSupported('v26.13.1', '>=24'), true);
});

test('an older major is not supported', () => {
    assert.equal(isSupported('v22.22.2', '>=24'), false);
});

test('the lowest version itself is supported', () => {
    assert.equal(isSupported('v24.0.0', '>=24'), true);
    assert.equal(isSupported('v22.12.0', '>=22.12'), true);
});

test('the minor counts when the range has one', () => {
    assert.equal(isSupported('v22.22.2', '>=22.12'), true);
    assert.equal(isSupported('v22.11.0', '>=22.12'), false);
});

test('minors are compared as numbers, not as text', () => {
    assert.equal(isSupported('v22.9.0', '>=22.12'), false);
    assert.equal(isSupported('v22.100.0', '>=22.12'), true);
});

test('the patch counts when the range has one', () => {
    assert.equal(isSupported('v22.12.0', '>=22.12.1'), false);
    assert.equal(isSupported('v22.12.3', '>=22.12.1'), true);
});
