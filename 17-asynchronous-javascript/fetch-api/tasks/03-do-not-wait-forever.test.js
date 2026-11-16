import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadStock } = await import(
    process.env.SOLUTIONS
        ? '../solutions/03-do-not-wait-forever.js'
        : './03-do-not-wait-forever.js'
);

// A fake server that answers fast. It records the URL and the options of each request.
function fastServer(t) {
    const requests = [];
    t.mock.method(globalThis, 'fetch', async (url, options = {}) => {
        requests.push({ url: String(url), options });
        return new Response(JSON.stringify({ id: 7, count: 12 }), { status: 200 });
    });
    return requests;
}

// A fake server that never answers. Like the real fetch(), it rejects with the
// reason of the signal when the signal aborts, and waits forever without one.
function silentServer(t) {
    t.mock.method(globalThis, 'fetch', (url, options = {}) => {
        return new Promise((resolve, reject) => {
            options.signal?.addEventListener('abort', () => reject(options.signal.reason));
        });
    });
}

test('the request goes to the stock URL of the product', async (t) => {
    const requests = fastServer(t);
    await loadStock(7, 500);
    assert.equal(requests[0]?.url, 'https://shop.example/api/stock/7');
});

test('an answer in time gives the count', async (t) => {
    fastServer(t);
    assert.equal(await loadStock(7, 500), 12);
});

test('the request gets a signal', async (t) => {
    const requests = fastServer(t);
    await loadStock(7, 500);
    assert.ok(requests[0]?.options.signal instanceof AbortSignal);
});

test('no answer within the time gives null', async (t) => {
    silentServer(t);
    // A real 30 ms wait. The timer of AbortSignal.timeout() does not keep Node
    // running by itself, so a timer of our own keeps the test alive until then.
    const keepAlive = setTimeout(() => {}, 1000);
    try {
        assert.equal(await loadStock(7, 30), null);
    } finally {
        clearTimeout(keepAlive);
    }
});

test('any other error is thrown on', async (t) => {
    t.mock.method(globalThis, 'fetch', async () => {
        throw new TypeError('fetch failed');
    });
    await assert.rejects(loadStock(7, 500), { name: 'TypeError' });
});
