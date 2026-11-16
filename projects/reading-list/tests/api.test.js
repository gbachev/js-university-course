import { afterEach, describe, expect, it, vi } from 'vitest';
import { coverUrl, searchBooks } from '../src/api.js';

// Replace the global fetch with a fake that answers with `body`.
function mockFetch(body, { ok = true, status = 200 } = {}) {
    const fetch = vi.fn(async () => ({ ok, status, json: async () => body }));
    vi.stubGlobal('fetch', fetch);
    return fetch;
}

afterEach(() => {
    vi.unstubAllGlobals();
});

describe('searchBooks', () => {
    it('turns the raw results into clean book objects', async () => {
        mockFetch({
            docs: [
                {
                    key: '/works/OL893414W',
                    title: 'Dune',
                    author_name: ['Frank Herbert'],
                    first_publish_year: 1965,
                    cover_i: 11481354,
                },
                { key: '/works/OL1W', title: 'A Book With No Details' },
            ],
        });

        expect(await searchBooks('dune')).toEqual([
            {
                key: '/works/OL893414W',
                title: 'Dune',
                author: 'Frank Herbert',
                year: 1965,
                coverId: 11481354,
            },
            {
                key: '/works/OL1W',
                title: 'A Book With No Details',
                author: 'Unknown author',
                year: null,
                coverId: null,
            },
        ]);
    });

    it('puts the query in the URL and passes the signal on', async () => {
        const fetch = mockFetch({ docs: [] });
        const { signal } = new AbortController();

        await searchBooks('frank herbert', { signal });

        const [url, options] = fetch.mock.calls[0];
        expect(url).toContain(
            'https://openlibrary.org/search.json?q=frank+herbert',
        );
        expect(options.signal).toBe(signal);
    });

    it('throws when the response is not ok', async () => {
        mockFetch({}, { ok: false, status: 503 });
        await expect(searchBooks('dune')).rejects.toThrow('HTTP 503');
    });
});

describe('coverUrl', () => {
    it('builds the small cover image URL', () => {
        expect(coverUrl(11481354)).toBe(
            'https://covers.openlibrary.org/b/id/11481354-S.jpg',
        );
    });
});
