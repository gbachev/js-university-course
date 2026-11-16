const SEARCH_URL = 'https://openlibrary.org/search.json';
const FIELDS = 'key,title,author_name,first_publish_year,cover_i';

export function searchUrl(query, page = 1) {
    if (!Number.isInteger(page) || page < 1) {
        throw new RangeError('page must be a whole number from 1');
    }
    const params = new URLSearchParams({ q: query.trim(), limit: 10, fields: FIELDS });
    if (page > 1) {
        params.set('page', page);
    }
    return `${SEARCH_URL}?${params}`;
}
