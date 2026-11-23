import { test, mock } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { createAutocomplete } = await import(
    process.env.SOLUTIONS ? '../solutions/02-autocomplete.js' : './02-autocomplete.js'
);

const titles = ['Children of Dune', 'Dune', 'Dune Messiah', 'Emma'];

// A fake fetch, like the server of the lecture: it answers after 500 ms with the
// titles that contain the query, the ones that start with it first, and rejects with
// an AbortError when the signal aborts.
function fakeFetch() {
    return mock.fn((url, { signal }) => {
        const query = new URL(url, 'http://shop.test').searchParams.get('q');
        return new Promise((resolve, reject) => {
            const id = setTimeout(() => {
                const hits = titles.filter((title) => title.toLowerCase().includes(query));
                const rank = (title) => (title.toLowerCase().startsWith(query) ? 0 : 1);
                const ranked = hits.toSorted((a, b) => rank(a) - rank(b));
                resolve({ ok: true, json: async () => ranked });
            }, 500);
            signal.addEventListener('abort', () => {
                clearTimeout(id);
                reject(signal.reason);
            });
        });
    });
}

// The tests use fake timers, so they move the clock forward instead of waiting.
// Node 22 prints an ExperimentalWarning for these MockTimers. It is harmless.
function setup(t) {
    t.mock.timers.enable({ apis: ['setTimeout'] });
    const fetch = fakeFetch();
    const onResults = mock.fn();
    const type = createAutocomplete(fetch, onResults);
    // Moves the clock, then lets the promise callbacks run.
    async function wait(ms) {
        t.mock.timers.tick(ms);
        await new Promise((resolve) => setImmediate(resolve));
    }
    return { fetch, onResults, type, wait };
}

const duneResults = ['Dune', 'Dune Messiah', 'Children of Dune'];

test('one request after the typing pauses, with the normalized query', async (t) => {
    const { fetch, type, wait } = setup(t);
    type('d');
    await wait(100);
    type('du');
    await wait(100);
    type('Dune ');
    await wait(299);
    assert.equal(fetch.mock.callCount(), 0);
    await wait(1);
    assert.equal(fetch.mock.callCount(), 1);
    assert.equal(fetch.mock.calls[0].arguments[0], '/api/books?q=dune');
});

test('the server\'s answer reaches onResults', async (t) => {
    const { onResults, type, wait } = setup(t);
    type('dune');
    await wait(300);
    await wait(500);
    assert.equal(onResults.mock.callCount(), 1);
    assert.deepEqual(onResults.mock.calls[0].arguments[0], duneResults);
});

test('a request still waiting is aborted and its answer never shows', async (t) => {
    const { fetch, onResults, type, wait } = setup(t);
    type('du');
    await wait(350);
    type('dune');
    await wait(300);
    assert.equal(fetch.mock.calls[0].arguments[1].signal.aborted, true);
    await wait(1000);
    assert.equal(onResults.mock.callCount(), 1);
    assert.deepEqual(onResults.mock.calls[0].arguments[0], duneResults);
});

test('a query we asked before comes from the cache', async (t) => {
    const { fetch, onResults, type, wait } = setup(t);
    type('Dune');
    await wait(300);
    await wait(500);
    type('  dune ');
    await wait(300);
    assert.equal(fetch.mock.callCount(), 1);
    assert.equal(onResults.mock.callCount(), 2);
    assert.deepEqual(onResults.mock.calls[1].arguments[0], duneResults);
});

test('a cached answer aborts the request still waiting', async (t) => {
    const { fetch, onResults, type, wait } = setup(t);
    type('dune');
    await wait(300);
    await wait(500);
    type('emma');
    await wait(300);
    type('dune');
    await wait(300);
    assert.equal(fetch.mock.calls[1].arguments[1].signal.aborted, true);
    await wait(1000);
    assert.deepEqual(
        onResults.mock.calls.map((call) => call.arguments[0]),
        [duneResults, duneResults],
    );
});

test('an empty query gives no results and no request', async (t) => {
    const { fetch, onResults, type, wait } = setup(t);
    type('   ');
    await wait(300);
    assert.equal(fetch.mock.callCount(), 0);
    assert.deepEqual(onResults.mock.calls[0].arguments[0], []);
});
