import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { loadProduct } = await import(
    process.env.SOLUTIONS ? '../solutions/01-load-a-product.js' : './01-load-a-product.js'
);

// Replaces the global fetch() with a fake that answers with this status and data.
// It records the URLs it was called with. The real fetch() comes back after the test.
function fakeFetch(t, status, data) {
    const urls = [];
    t.mock.method(globalThis, 'fetch', async (url) => {
        urls.push(String(url));
        return new Response(JSON.stringify(data), { status });
    });
    return urls;
}

test('the request goes to the URL of the product', async (t) => {
    const urls = fakeFetch(t, 200, { id: 7, title: 'Clean Code', price: 35 });
    await loadProduct(7);
    assert.deepEqual(urls, ['https://shop.example/api/products/7']);
});

test('a 200 response gives the product from the JSON body', async (t) => {
    fakeFetch(t, 200, { id: 7, title: 'Clean Code', price: 35 });
    assert.deepEqual(await loadProduct(7), { id: 7, title: 'Clean Code', price: 35 });
});

test('a 404 response throws "Product <id> not found"', async (t) => {
    fakeFetch(t, 404, {});
    await assert.rejects(loadProduct(99), { message: 'Product 99 not found' });
});

test('another failed status throws with the status in the message', async (t) => {
    fakeFetch(t, 500, { error: 'Server error' });
    await assert.rejects(loadProduct(7), {
        message: 'Request failed with status 500',
    });
});

test('a network error passes through', async (t) => {
    t.mock.method(globalThis, 'fetch', async () => {
        throw new TypeError('fetch failed');
    });
    await assert.rejects(loadProduct(7), { name: 'TypeError', message: 'fetch failed' });
});
