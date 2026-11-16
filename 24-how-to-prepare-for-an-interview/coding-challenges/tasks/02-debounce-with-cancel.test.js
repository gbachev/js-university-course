import { test, mock } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { debounce } = await import(
    process.env.SOLUTIONS
        ? '../solutions/02-debounce-with-cancel.js'
        : './02-debounce-with-cancel.js'
);

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.

test('a burst of calls runs fn once, with the arguments of the last call', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const search = mock.fn();
    const debounced = debounce(search, 300);
    debounced('j');
    debounced('ja');
    debounced('java');
    t.mock.timers.tick(300);
    assert.equal(search.mock.callCount(), 1);
    assert.deepEqual(search.mock.calls[0].arguments, ['java']);
});

test('fn waits for wait ms after the last call, not the first', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const search = mock.fn();
    const debounced = debounce(search, 300);
    debounced('ja');
    t.mock.timers.tick(200);
    debounced('java');
    t.mock.timers.tick(200);
    assert.equal(search.mock.callCount(), 0);
    t.mock.timers.tick(100);
    assert.equal(search.mock.callCount(), 1);
});

test('two calls further apart than wait both run', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const search = mock.fn();
    const debounced = debounce(search, 300);
    debounced('dune');
    t.mock.timers.tick(400);
    debounced('emma');
    t.mock.timers.tick(400);
    assert.deepEqual(
        search.mock.calls.map((call) => call.arguments[0]),
        ['dune', 'emma'],
    );
});

test('a debounced method keeps its this', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const searchBox = {
        label: 'Books',
        lastSearch: null,
        search: null,
    };
    searchBox.search = debounce(function (query) {
        this.lastSearch = `${this.label}: ${query}`;
    }, 300);
    searchBox.search('dune');
    t.mock.timers.tick(300);
    assert.equal(searchBox.lastSearch, 'Books: dune');
});

test('cancel() drops the waiting call', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const search = mock.fn();
    const debounced = debounce(search, 300);
    debounced('dune');
    debounced.cancel();
    t.mock.timers.tick(1000);
    assert.equal(search.mock.callCount(), 0);
});

test('cancel() with nothing waiting does no harm', (t) => {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const search = mock.fn();
    const debounced = debounce(search, 300);
    debounced.cancel();
    debounced('emma');
    t.mock.timers.tick(300);
    assert.equal(search.mock.callCount(), 1);
});
