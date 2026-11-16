// tests/api.test.js
import { afterEach, expect, test, vi } from 'vitest';
import { searchBooks } from '../src/api.js';

afterEach(() => {
    vi.unstubAllGlobals();
});

test('returns the titles it finds', async () => {
    const body = { docs: [{ title: 'Dune' }] };
    const fakeFetch = vi.fn(async () => ({
        ok: true,
        json: async () => body,
    }));
    vi.stubGlobal('fetch', fakeFetch);

    const titles = await searchBooks('dune');

    expect(titles).toEqual(['Dune']);
    expect(fakeFetch).toHaveBeenCalledOnce();
});

// Added after the coverage report, for line 8 of api.js.
test('throws when the server fails', async () => {
    const fakeFetch = vi.fn(async () => ({ ok: false, status: 500 }));
    vi.stubGlobal('fetch', fakeFetch);

    await expect(searchBooks('dune')).rejects.toThrow('HTTP 500');
});
