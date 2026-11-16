import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { isFeatureOn } = await import(
    process.env.SOLUTIONS ? '../solutions/02-feature-flag.js' : './02-feature-flag.js'
);

test('a plain true flag turns the feature on', () => {
    assert.equal(isFeatureOn(true), true);
});

test('a plain false flag leaves the feature off', () => {
    assert.equal(isFeatureOn(false), false);
});

test('a wrapper object holding false leaves the feature off', () => {
    assert.equal(isFeatureOn(new Boolean(false)), false);
});

test('a wrapper object holding true turns the feature on', () => {
    assert.equal(isFeatureOn(new Boolean(true)), true);
});

test('the result is a primitive boolean, not a wrapper object', () => {
    assert.equal(typeof isFeatureOn(new Boolean(true)), 'boolean');
});
