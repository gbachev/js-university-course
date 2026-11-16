// src/api.js
const SEARCH_URL = 'https://openlibrary.org/search.json';

export async function searchBooks(query) {
    const url = `${SEARCH_URL}?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return data.docs.map((doc) => doc.title);
}
