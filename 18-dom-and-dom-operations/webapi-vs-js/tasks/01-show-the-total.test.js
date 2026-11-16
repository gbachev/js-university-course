import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { showTotal } = await import(
    process.env.SOLUTIONS ? '../solutions/01-show-the-total.js' : './01-show-the-total.js'
);

test('without a document it does not throw', (t) => {
    t.mock.method(console, 'log', () => {});
    assert.doesNotThrow(() => showTotal(88.5));
});

test('without a document it prints the total with two decimals', (t) => {
    const log = t.mock.method(console, 'log', () => {});
    showTotal(88.5);
    assert.deepEqual(log.mock.calls[0]?.arguments, ['Total: 88.50 EUR']);
});

test('with a document it sets the title and prints nothing', (t) => {
    const log = t.mock.method(console, 'log', () => {});
    globalThis.document = { title: '' };
    try {
        showTotal(32.5);
        assert.equal(globalThis.document.title, 'Total: 32.50 EUR');
        assert.equal(log.mock.callCount(), 0);
    } finally {
        delete globalThis.document;
    }
});
