import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { needsPolyfill } = await import(
    process.env.SOLUTIONS ? '../solutions/02-needs-polyfill.js' : './02-needs-polyfill.js'
);

const groupBy = { chrome: 117, firefox: 119, safari: 17.4 };

test('no polyfill when every target has the feature', () => {
    assert.equal(
        needsPolyfill(groupBy, ['chrome 157', 'firefox 160', 'safari 27.2']),
        false,
    );
});

test('one old target is enough to need the polyfill', () => {
    assert.equal(needsPolyfill(groupBy, ['chrome 157', 'chrome 109', 'firefox 160']), true);
});

test('the first version with the feature does not need it', () => {
    assert.equal(needsPolyfill(groupBy, ['chrome 117', 'firefox 119']), false);
});

test('versions with a dot are compared as numbers', () => {
    assert.equal(needsPolyfill(groupBy, ['safari 17.3']), true);
    assert.equal(needsPolyfill(groupBy, ['safari 17.4']), false);
});

test('a browser we know nothing about needs the polyfill', () => {
    assert.equal(needsPolyfill(groupBy, ['chrome 157', 'samsung 31']), true);
});

test('no targets need no polyfill', () => {
    assert.equal(needsPolyfill(groupBy, []), false);
});
