import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadFeature } = await import(
    process.env.SOLUTIONS ? '../solutions/03-load-feature.js' : './03-load-feature.js'
);

const notAvailable = {
    sizeGuideText() {
        return 'The size guide is not available';
    },
};

test('a module that loads gives its exports', async () => {
    const guide = await loadFeature('./03-load-feature/size-guide.js', notAvailable);
    assert.equal(guide.sizeGuideText(), 'S: 36-38, M: 40-42, L: 44-46');
});

test('a missing file gives the fallback', async () => {
    const guide = await loadFeature('./03-load-feature/missing.js', notAvailable);
    assert.equal(guide, notAvailable);
});

test('a module that throws while it runs gives the fallback', async () => {
    assert.equal(await loadFeature('./03-load-feature/broken.js', null), null);
});

test('a failed load never rejects the promise', async () => {
    await assert.doesNotReject(loadFeature('./03-load-feature/missing.js', null));
    await assert.doesNotReject(loadFeature('./03-load-feature/broken.js', null));
});
