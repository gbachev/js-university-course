import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { searchProducts } = await import(
    process.env.SOLUTIONS ? '../solutions/03-search-products.js' : './03-search-products.js'
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

const products = [
    'Wireless Mouse',
    'Keyboard',
    'Gaming Mouse',
    'Monitor',
    'Mouse Pad',
    'Webcam',
    'Travel Mouse',
];

test('returns the first matches, in order', async () => {
    const fetchPage = fakeApi(products);
    assert.deepEqual(await searchProducts(fetchPage, 'mouse', 2), [
        'Wireless Mouse',
        'Gaming Mouse',
    ]);
});

test('ignores upper and lower case', async () => {
    assert.deepEqual(await searchProducts(fakeApi(products), 'KEY', 1), ['Keyboard']);
});

test('stops requesting pages once it has enough matches', async () => {
    const fetchPage = fakeApi(products);
    await searchProducts(fetchPage, 'mouse', 2);
    assert.deepEqual(fetchPage.requests, [1, 2]);
});

test('when the pages run out, returns what it found', async () => {
    const fetchPage = fakeApi(products);
    assert.deepEqual(await searchProducts(fetchPage, 'mouse', 10), [
        'Wireless Mouse',
        'Gaming Mouse',
        'Mouse Pad',
        'Travel Mouse',
    ]);
    assert.deepEqual(fetchPage.requests, [1, 2, 3, 4]);
});

test('no match gives an empty array', async () => {
    assert.deepEqual(await searchProducts(fakeApi(products), 'xyz', 3), []);
});

test('a limit of 0 gives an empty array without a request', async () => {
    const fetchPage = fakeApi(products);
    assert.deepEqual(await searchProducts(fetchPage, 'mouse', 0), []);
    assert.deepEqual(fetchPage.requests, []);
});
