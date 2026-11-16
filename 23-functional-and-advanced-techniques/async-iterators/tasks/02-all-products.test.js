import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { allProducts } = await import(
    process.env.SOLUTIONS ? '../solutions/02-all-products.js' : './02-all-products.js'
);

// A fake API with no network: two products per page, and a log of requested pages.
function fakeApi(products, perPage = 2) {
    const fetchPage = async (page) => {
        fetchPage.requests.push(page);
        const start = (page - 1) * perPage;
        return {
            items: products.slice(start, start + perPage),
            hasMore: start + perPage < products.length,
        };
    };
    fetchPage.requests = [];
    return fetchPage;
}

const products = ['Mouse', 'Keyboard', 'Monitor', 'Webcam', 'Headset'];

test('yields every product of every page, in order', async () => {
    const fetchPage = fakeApi(products);
    assert.deepEqual(await Array.fromAsync(allProducts(fetchPage)), products);
    assert.deepEqual(fetchPage.requests, [1, 2, 3]);
});

test('works with for await...of', async () => {
    const seen = [];
    for await (const product of allProducts(fakeApi(products))) {
        seen.push(product);
    }
    assert.equal(seen.length, 5);
});

test('asks for the next page only after using the products of the one before', async () => {
    const fetchPage = fakeApi(products);
    const seen = [];
    for await (const product of allProducts(fetchPage)) {
        seen.push(`${product} after pages ${fetchPage.requests.join(',')}`);
    }
    assert.deepEqual(seen.slice(0, 3), [
        'Mouse after pages 1',
        'Keyboard after pages 1',
        'Monitor after pages 1,2',
    ]);
});

test('stops at the page whose hasMore is false', async () => {
    const fetchPage = fakeApi(['Mouse', 'Keyboard']);
    assert.deepEqual(await Array.fromAsync(allProducts(fetchPage)), ['Mouse', 'Keyboard']);
    assert.deepEqual(fetchPage.requests, [1]);
});

test('an empty first page gives no products', async () => {
    assert.deepEqual(await Array.fromAsync(allProducts(fakeApi([]))), []);
});

test('an empty page in the middle is skipped, and the next page is still requested', async () => {
    const pages = [
        { items: ['Mouse'], hasMore: true },
        { items: [], hasMore: true },
        { items: ['Webcam'], hasMore: false },
    ];
    const fetchPage = async (page) => pages[page - 1];
    assert.deepEqual(await Array.fromAsync(allProducts(fetchPage)), ['Mouse', 'Webcam']);
});

test('a break stops the requests', async () => {
    const fetchPage = fakeApi(products);
    for await (const product of allProducts(fetchPage)) {
        if (product === 'Keyboard') break;
    }
    assert.deepEqual(fetchPage.requests, [1]);
});
