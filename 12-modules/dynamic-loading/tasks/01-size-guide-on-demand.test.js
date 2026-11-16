import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
// The modules run once, so the tests share their state and run in this order.
const { openSizeGuide } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-size-guide-on-demand.js'
        : './01-size-guide-on-demand.js'
);
const { loaded } = await import(
    process.env.SOLUTIONS
        ? '../solutions/01-size-guide-on-demand/log.js'
        : './01-size-guide-on-demand/log.js'
);

test('importing our file does not load the size guide', () => {
    assert.deepEqual(loaded, []);
});

test('openSizeGuide returns a promise', () => {
    const result = openSizeGuide();
    assert.ok(result instanceof Promise);
});

test('the promise gives the text of the size guide', async () => {
    assert.equal(await openSizeGuide(), 'S: 36-38, M: 40-42, L: 44-46');
    assert.deepEqual(loaded, ['size-guide.js']);
});

test('a second call does not run the size guide again', async () => {
    assert.equal(await openSizeGuide(), 'S: 36-38, M: 40-42, L: 44-46');
    assert.deepEqual(loaded, ['size-guide.js']);
});
