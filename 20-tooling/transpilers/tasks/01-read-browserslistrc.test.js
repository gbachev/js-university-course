import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { readBrowserslistrc } = await import(
    process.env.SOLUTIONS ? '../solutions/01-read-browserslistrc.js' : './01-read-browserslistrc.js'
);

test('one query per line', () => {
    assert.deepEqual(readBrowserslistrc('> 0.5%\nlast 2 versions\nnot dead\n'), [
        '> 0.5%',
        'last 2 versions',
        'not dead',
    ]);
});

test('several queries on one line, separated by commas', () => {
    assert.deepEqual(readBrowserslistrc('> 0.5%, last 2 versions, not dead'), [
        '> 0.5%',
        'last 2 versions',
        'not dead',
    ]);
});

test('empty lines and spaces around queries are skipped', () => {
    assert.deepEqual(readBrowserslistrc('\n   defaults   \n\n  not chrome 109\n\n'), [
        'defaults',
        'not chrome 109',
    ]);
});

test('comments are skipped, on their own line or after a query', () => {
    const text = '# Our targets\ndefaults, not chrome 109  # no Windows 7\n';
    assert.deepEqual(readBrowserslistrc(text), ['defaults', 'not chrome 109']);
});

test('an empty file has no queries', () => {
    assert.deepEqual(readBrowserslistrc(''), []);
});
