import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createBreadcrumbs } = await import(
    process.env.SOLUTIONS ? '../solutions/02-breadcrumbs.js' : './02-breadcrumbs.js'
);

test('a new buffer has no actions', () => {
    assert.deepEqual(createBreadcrumbs().list(), []);
});

test('keeps the actions in the order they happened', () => {
    const crumbs = createBreadcrumbs();
    crumbs.add('start, 2 saved books');
    crumbs.add('search');
    assert.deepEqual(crumbs.list(), ['start, 2 saved books', 'search']);
});

test('keeps only the last five actions by default', () => {
    const crumbs = createBreadcrumbs();
    for (const action of ['start', 'search', 'add result', 'toggle', 'remove', 'search']) {
        crumbs.add(action);
    }
    assert.deepEqual(crumbs.list(), ['search', 'add result', 'toggle', 'remove', 'search']);
});

test('keeps as many actions as the limit we pass', () => {
    const crumbs = createBreadcrumbs(2);
    crumbs.add('start');
    crumbs.add('search');
    crumbs.add('add result');
    assert.deepEqual(crumbs.list(), ['search', 'add result']);
});

test('changing the list we get back does not change the breadcrumbs', () => {
    const crumbs = createBreadcrumbs();
    crumbs.add('search');
    crumbs.list().push('typed: dune');
    assert.deepEqual(crumbs.list(), ['search']);
});

test('two buffers do not share their actions', () => {
    const first = createBreadcrumbs();
    const second = createBreadcrumbs();
    first.add('search');
    assert.deepEqual(second.list(), []);
});
