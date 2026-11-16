import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { satisfies } = await import(
    process.env.SOLUTIONS ? '../solutions/03-satisfies.js' : './03-satisfies.js'
);

test('a caret range accepts newer minors and patches of the same major', () => {
    assert.equal(satisfies('5.1.16', '^5.1.10'), true);
    assert.equal(satisfies('5.2.0', '^5.1.10'), true);
    assert.equal(satisfies('5.1.10', '^5.1.10'), true);
});

test('a caret range rejects the next major and older versions', () => {
    assert.equal(satisfies('6.0.0', '^5.1.10'), false);
    assert.equal(satisfies('5.1.9', '^5.1.10'), false);
    assert.equal(satisfies('5.0.20', '^5.1.10'), false);
});

test('a tilde range accepts newer patches only', () => {
    assert.equal(satisfies('5.1.16', '~5.1.10'), true);
    assert.equal(satisfies('5.2.0', '~5.1.10'), false);
    assert.equal(satisfies('5.1.9', '~5.1.10'), false);
});

test('a version without a symbol accepts only itself', () => {
    assert.equal(satisfies('5.1.10', '5.1.10'), true);
    assert.equal(satisfies('5.1.11', '5.1.10'), false);
});

test('below 1.0.0 a caret range stops before the next minor', () => {
    assert.equal(satisfies('0.4.9', '^0.4.2'), true);
    assert.equal(satisfies('0.5.0', '^0.4.2'), false);
    assert.equal(satisfies('0.4.1', '^0.4.2'), false);
});

test('numbers are compared as numbers, not as text', () => {
    assert.equal(satisfies('8.10.0', '^8.3.8'), true);
    assert.equal(satisfies('8.3.10', '~8.3.8'), true);
});
