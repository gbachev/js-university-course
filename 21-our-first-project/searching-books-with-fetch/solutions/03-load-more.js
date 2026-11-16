const SEARCH_URL = 'https://openlibrary.org/search.json';
const FIELDS = 'key,title,author_name,first_publish_year,cover_i';
const PAGE_SIZE = 10;

const toBook = (doc) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] ?? 'Unknown author',
    year: doc.first_publish_year ?? null,
    coverId: doc.cover_i ?? null,
});

export async function searchPage(fetchFn, query, page) {
    const params = new URLSearchParams({
        q: query,
        limit: PAGE_SIZE,
        fields: FIELDS,
        page,
    });
    const response = await fetchFn(`${SEARCH_URL}?${params}`);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    const total = data.numFound ?? 0;
    return {
        books: (data.docs ?? []).map(toBook),
        total,
        hasMore: page * PAGE_SIZE < total,
    };
}
