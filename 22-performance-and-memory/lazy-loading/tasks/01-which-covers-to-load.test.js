import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { coversToLoad } = await import(
    process.env.SOLUTIONS ? '../solutions/01-which-covers-to-load.js' : './01-which-covers-to-load.js'
);

// Six covers of 300 px, one every 500 px down the page.
const covers = ['dune', 'emma', 'ulysses', 'hamlet', 'beloved', 'walden'].map((id, i) => ({
    id,
    top: i * 500,
    height: 300,
}));

test('at the top of the page, only the covers near the first screen load', () => {
    assert.deepEqual(coversToLoad(covers, 0, 800, 0), ['dune', 'emma']);
});

test('the margin loads covers below the screen ahead of time', () => {
    assert.deepEqual(coversToLoad(covers, 0, 800, 300), ['dune', 'emma', 'ulysses']);
});

test('after a scroll, the zone moves down and covers above it are left out', () => {
    assert.deepEqual(coversToLoad(covers, 1600, 800, 0), ['hamlet', 'beloved']);
});

test('the margin also reaches above the screen', () => {
    // without the margin only beloved (2000 to 2300) is on the screen
    assert.deepEqual(coversToLoad(covers, 1900, 400, 0), ['beloved']);
    assert.deepEqual(coversToLoad(covers, 1900, 400, 200), ['hamlet', 'beloved']);
});

test('a cover that only touches the edge of the zone is not loaded', () => {
    // the zone runs from 300 to 1000: dune ends at 300, ulysses starts at 1000
    assert.deepEqual(coversToLoad(covers, 300, 700, 0), ['emma']);
});

test('no covers, nothing to load', () => {
    assert.deepEqual(coversToLoad([], 0, 800, 300), []);
});
