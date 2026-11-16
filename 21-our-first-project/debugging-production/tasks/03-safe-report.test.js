import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { buildReport } = await import(
    process.env.SOLUTIONS ? '../solutions/03-safe-report.js' : './03-safe-report.js'
);

const page = {
    href: 'https://johndoe.github.io/reading-list/',
    version: '1.1.0',
    browser: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    breadcrumbs: ['start, 2 saved books'],
};

test('reports the message, stack, page, version, browser and breadcrumbs', () => {
    const error = new RangeError('Invalid time value');
    assert.deepEqual(buildReport(error, page), {
        message: 'RangeError: Invalid time value',
        stack: error.stack,
        url: 'https://johndoe.github.io/reading-list/',
        version: '1.1.0',
        browser: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        breadcrumbs: ['start, 2 saved books'],
    });
});

test('leaves the query string and the hash out of the url', () => {
    const href =
        'https://johndoe.github.io/reading-list/?email=jane@example.com&q=dune#list';
    const report = buildReport(new Error('Oops'), { ...page, href });
    assert.equal(report.url, 'https://johndoe.github.io/reading-list/');
});

test('leaves a hash out of the url when there is no query string', () => {
    const href = 'https://johndoe.github.io/reading-list/#list';
    const report = buildReport(new Error('Oops'), { ...page, href });
    assert.equal(report.url, 'https://johndoe.github.io/reading-list/');
});

test('keeps only the last five breadcrumbs', () => {
    const breadcrumbs = ['start', 'search', 'add result', 'toggle', 'remove', 'search'];
    const report = buildReport(new Error('Oops'), { ...page, breadcrumbs });
    assert.deepEqual(report.breadcrumbs, [
        'search',
        'add result',
        'toggle',
        'remove',
        'search',
    ]);
});

test('does not change the breadcrumbs it receives', () => {
    const breadcrumbs = ['start'];
    const report = buildReport(new Error('Oops'), { ...page, breadcrumbs });
    report.breadcrumbs.push('search');
    assert.deepEqual(breadcrumbs, ['start']);
});

test('works for a string reason, with no stack', () => {
    const report = buildReport('Covers service is down', page);
    assert.equal(report.message, 'Covers service is down');
    assert.equal(report.stack, undefined);
});

test('works for a null error', () => {
    const report = buildReport(null, page);
    assert.equal(report.message, 'null');
    assert.equal(report.stack, undefined);
});
