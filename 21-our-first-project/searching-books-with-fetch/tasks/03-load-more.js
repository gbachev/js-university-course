// Task 3: Load more results
// Lecture: Searching Books with Fetch
//
// For a "Load more" button we need to know if more results exist. Open Library sends
// numFound, the number of all matches, next to docs. Write the async function
// searchPage(fetchFn, query, page): it calls fetchFn (the tests pass a fake fetch) with
// the URL of searchBooks() plus page=<page>, and resolves to { books, total, hasMore }:
// books are the docs passed through toBook(), total is numFound (0 when missing), and
// hasMore is true when the pages so far, 10 results each, have not shown all of them.
// When response.ok is false, it throws an Error like 'HTTP 503', as searchBooks() does.
//
// Examples:
//   await searchPage(fetch, 'dune', 1)
//   // { books: [10 books], total: 48291, hasMore: true }
//   await searchPage(fetch, 'dune', 3)   // with numFound: 25
//   // { books: [5 books], total: 25, hasMore: false }
//
// Run the tests: npm test -- 21-our-first-project/searching-books-with-fetch

// Copied from reading-list/src/api.js.
const SEARCH_URL = 'https://openlibrary.org/search.json';
const FIELDS = 'key,title,author_name,first_publish_year,cover_i';

const toBook = (doc) => ({
    key: doc.key,
    title: doc.title,
    author: doc.author_name?.[0] ?? 'Unknown author',
    year: doc.first_publish_year ?? null,
    coverId: doc.cover_i ?? null,
});

export async function searchPage(fetchFn, query, page) {
    // Your code here
}
