// Task 1: A search URL with pages
// Lecture: Searching Books with Fetch
//
// searchBooks() asks for the first ten results only. Open Library also takes a page
// parameter: page=2 gives results 11 to 20. Write searchUrl(query, page = 1): it
// returns the full search URL with q (the query, trimmed), limit=10 and fields, in
// that order, built with URLSearchParams, and &page=<page> at the end only when page
// is more than 1. A page below 1, or one that is not a whole number (a string like
// '2' included), throws a RangeError with the message
// 'page must be a whole number from 1'.
//
// Examples:
//   searchUrl('dune')
//   // 'https://openlibrary.org/search.json?q=dune&limit=10&fields=key,...,cover_i'
//   searchUrl(' lord of the rings ', 2)
//   // '...search.json?q=lord+of+the+rings&limit=10&fields=...&page=2'
//
// Run the tests: npm test -- 21-our-first-project/searching-books-with-fetch

// Copied from reading-list/src/api.js.
const SEARCH_URL = 'https://openlibrary.org/search.json';
const FIELDS = 'key,title,author_name,first_publish_year,cover_i';

export function searchUrl(query, page = 1) {
    // Your code here
}
