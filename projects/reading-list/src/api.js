const SEARCH_URL = 'https://openlibrary.org/search.json';
const FIELDS = 'key,title,author_name,first_publish_year,cover_i';

// Turn one raw Open Library result into the shape the rest of the app uses.
const toBook = (doc) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] ?? 'Unknown author',
    year: doc.first_publish_year ?? null,
    coverId: doc.cover_i ?? null,
});

export async function searchBooks(query, { signal } = {}) {
    const params = new URLSearchParams({ q: query, limit: 10, fields: FIELDS });
    const response = await fetch(`${SEARCH_URL}?${params}`, { signal });

    // fetch() rejects only when no response arrives (a network failure
    // or an abort). A 404 or a 500 still resolves, so we check the
    // status ourselves.
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    return (data.docs ?? []).map(toBook);
}

export const coverUrl = (coverId) =>
    `https://covers.openlibrary.org/b/id/${coverId}-S.jpg`;
