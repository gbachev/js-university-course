import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { pickVersion } = await import(
    process.env.SOLUTIONS ? '../solutions/03-nvm-use.js' : './03-nvm-use.js'
);

const installed = ['v22.22.2', 'v24.9.1', 'v24.22.3', 'v24.11.0', 'v26.13.1'];

test('a major picks the newest installed version of that major', () => {
    assert.equal(pickVersion(installed, '24'), 'v24.22.3');
    assert.equal(pickVersion(installed, '26'), 'v26.13.1');
});

test('the newline at the end and a leading v are ignored', () => {
    assert.equal(pickVersion(installed, '24\n'), 'v24.22.3');
    assert.equal(pickVersion(installed, 'v24\n'), 'v24.22.3');
});

test('a major and minor match only that minor', () => {
    assert.equal(pickVersion(installed, '24.11'), 'v24.11.0');
});

test('a full version matches only itself', () => {
    assert.equal(pickVersion(installed, '24.9.1'), 'v24.9.1');
});

test('a version that is not installed gives null', () => {
    assert.equal(pickVersion(installed, '27'), null);
    assert.equal(pickVersion([], '24'), null);
});

test('a major does not match a longer major that starts with the same digit', () => {
    assert.equal(pickVersion(['v24.22.3', 'v26.13.1'], '2'), null);
});
