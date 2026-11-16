import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { slowestMeasure } = await import(
    process.env.SOLUTIONS ? '../solutions/02-slowest-measure.js' : './02-slowest-measure.js'
);

const mark = (name) => ({ name, entryType: 'mark', duration: 0 });
const measure = (name, duration) => ({ name, entryType: 'measure', duration });

test('it finds the measure that took the longest', () => {
    const entries = [mark('save-start'), measure('save', 0.5), measure('render', 10.6)];
    assert.equal(slowestMeasure(entries), 'render');
});

test('the slowest measure can come first', () => {
    const entries = [measure('unique (findIndex)', 170.7), measure('unique (Set)', 1.4)];
    assert.equal(slowestMeasure(entries), 'unique (findIndex)');
});

test('marks are left out', () => {
    const entries = [{ name: 'odd-mark', entryType: 'mark', duration: 99 }, measure('save', 0.5)];
    assert.equal(slowestMeasure(entries), 'save');
});

test('without measures the answer is null', () => {
    assert.equal(slowestMeasure([]), null);
    assert.equal(slowestMeasure([mark('save-start'), mark('render-start')]), null);
});

test('on a tie the first measure wins', () => {
    const entries = [measure('save', 2), measure('render', 2)];
    assert.equal(slowestMeasure(entries), 'save');
});
