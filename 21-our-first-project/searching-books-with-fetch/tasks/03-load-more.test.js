import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { searchPage } = await import(
    process.env.SOLUTIONS ? '../solutions/03-load-more.js' : './03-load-more.js'
);

// A fake fetch that answers with `body` and remembers the URLs it was called with.
function fakeFetch(body, { ok = true, status = 200 } = {}) {
    const urls = [];
    const fetchFn = async (url) => {
        urls.push(url);
        return { ok, status, json: async () => body };
    };
    return { fetchFn, urls };
}

const doc = (n) => ({
    key: `/works/OL${n}W`,
    title: `Book ${n}`,
    author_name: ['Jane Austen'],
});
const docs = (count) => Array.from({ length: count }, (_, index) => doc(index + 1));

test('it asks for the query and the page', async () => {
    const { fetchFn, urls } = fakeFetch({ numFound: 0, docs: [] });
    await searchPage(fetchFn, 'frank herbert', 2);
    const url = new URL(urls[0]);
    assert.equal(url.origin + url.pathname, 'https://openlibrary.org/search.json');
    assert.equal(url.searchParams.get('q'), 'frank herbert');
    assert.equal(url.searchParams.get('limit'), '10');
    assert.equal(url.searchParams.get('page'), '2');
});

test('the docs come back as clean books, with the total', async () => {
    const { fetchFn } = fakeFetch({ numFound: 48291, docs: [doc(1)] });
    const result = await searchPage(fetchFn, 'dune', 1);
    assert.deepEqual(result.books, [
        {
            key: '/works/OL1W',
            title: 'Book 1',
            author: 'Jane Austen',
            year: null,
            coverId: null,
        },
    ]);
    assert.equal(result.total, 48291);
});

test('there are more results while the pages so far have not shown them all', async () => {
    const { fetchFn } = fakeFetch({ numFound: 25, docs: docs(10) });
    assert.equal((await searchPage(fetchFn, 'dune', 2)).hasMore, true);
});

test('the last page has no more results', async () => {
    const { fetchFn } = fakeFetch({ numFound: 25, docs: docs(5) });
    assert.equal((await searchPage(fetchFn, 'dune', 3)).hasMore, false);
});

test('exactly 20 results end on page 2', async () => {
    const { fetchFn } = fakeFetch({ numFound: 20, docs: docs(10) });
    assert.equal((await searchPage(fetchFn, 'dune', 2)).hasMore, false);
});

test('an answer without numFound or docs means no books and no more pages', async () => {
    const { fetchFn } = fakeFetch({});
    assert.deepEqual(await searchPage(fetchFn, 'dune', 1), {
        books: [],
        total: 0,
        hasMore: false,
    });
});

test('a response that is not ok throws an HTTP error', async () => {
    const { fetchFn } = fakeFetch({}, { ok: false, status: 503 });
    await assert.rejects(searchPage(fetchFn, 'dune', 1), { message: 'HTTP 503' });
});
