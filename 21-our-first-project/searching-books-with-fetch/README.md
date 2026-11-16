# Searching Books with Fetch

Code for the lecture *Searching Books with Fetch* (section 21, Our First Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`src/api.js`](../reading-list/src/api.js) - `searchBooks()` with `URLSearchParams` and the `response.ok` check, `toBook()` and `coverUrl()`
- [`src/debounce.js`](../reading-list/src/debounce.js) - `debounce()`
- [`src/main.js`](../reading-list/src/main.js) - `search`, `setSearch()`, `runSearch()` with the `AbortController`, the debounced `input` listener and the click listener on `#results`
- [`src/state.js`](../reading-list/src/state.js) - `searchMessage()`
- [`src/render.js`](../reading-list/src/render.js) - `resultItem()`, `renderResults()` and `renderStatus()`
- [`index.html`](../reading-list/index.html) - the search panel, the `aria-live` status line and the `#result-template`

## Run the app

The finished app is in [`reading-list/`](../reading-list), with its own `package.json`. From the repository folder:

```bash
cd 21-our-first-project/reading-list
npm install       # once: installs Vite, Vitest, ESLint and Prettier
npm run dev       # open the URL it prints, http://localhost:5173/
```

The folder holds the app as it is at the end of the section, so the page already does more than this lecture builds.

The search needs an internet connection: it calls the Open Library API.

## Tasks
1. **A search URL with pages** (`tasks/01-search-url.js`) - build the search URL with a page parameter
2. **Books with missing details** (`tasks/02-to-book.js`) - make `toBook()` handle several authors and a missing title
3. **Load more results** (`tasks/03-load-more.js`) - fetch one page of results and tell if more pages exist, with a fake `fetch` in the tests

Run the tests with `npm test -- 21-our-first-project/searching-books-with-fetch` from the repository folder (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
