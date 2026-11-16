import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { summarize } = await import(
    process.env.SOLUTIONS ? '../solutions/03-summarize-measures.js' : './03-summarize-measures.js'
);

const mark = (name) => ({ name, entryType: 'mark', duration: 0 });
const measure = (name, duration) => ({ name, entryType: 'measure', duration });

test('one measure gives a count of one', () => {
    assert.deepEqual(summarize([measure('save', 0.5)]), {
        save: { count: 1, total: 0.5, average: 0.5 },
    });
});

test('measures with the same name are counted, added up and averaged', () => {
    const entries = [measure('render', 10), measure('render', 12.5), measure('save', 0.5)];
    assert.deepEqual(summarize(entries), {
        render: { count: 2, total: 22.5, average: 11.3 },
        save: { count: 1, total: 0.5, average: 0.5 },
    });
});

test('total and average are rounded to one decimal', () => {
    const entries = [measure('render', 10.04), measure('render', 10.03), measure('render', 10.1)];
    assert.deepEqual(summarize(entries), {
        render: { count: 3, total: 30.2, average: 10.1 },
    });
});

test('marks are left out', () => {
    const entries = [mark('render-start'), measure('render', 4), mark('save-start')];
    assert.deepEqual(summarize(entries), { render: { count: 1, total: 4, average: 4 } });
});

test('no entries give an empty summary', () => {
    assert.deepEqual(summarize([]), {});
});
