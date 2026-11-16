# Reading List

A small app for keeping a list of books to read. Search Open Library by title or author, add books to your list, mark them read, and remove them. The list is saved in your browser, so it is still there after a reload.

Plain JavaScript (ES modules), built with Vite. No framework.

## Run it

You need Node.js 22.12 or newer (the repo pins Node 26 in .nvmrc).

```bash
npm install       # install the tools
npm run dev       # start the dev server, open the URL it prints
npm test          # run the tests once
npm run lint      # check the code with ESLint
npm run format    # format every file with Prettier
npm run build     # build the site into dist/
npm run preview   # serve dist/ locally to check the build
```

## Files

```
index.html            The page: layout, search box, list, form, and two <template>s for book rows
src/main.js           Wiring: holds the data, listens for events, calls render()
src/state.js          Pure functions that take the data and return new data (addBook, toggleRead...)
src/render.js         Builds the DOM from the data with <template>, createElement and textContent
src/api.js            searchBooks(): calls the Open Library search API and cleans up the results
src/storage.js        loadBooks() and saveBooks(): the list in localStorage, as JSON
src/debounce.js       debounce(): waits until the user stops typing
src/style.css         The styles
tests/state.test.js   Tests for the pure functions in state.js
tests/storage.test.js Tests for storage.js, with a fake storage object
tests/api.test.js     Tests for api.js, with a fake fetch
tests/debounce.test.js Tests for debounce.js, with fake timers
eslint.config.js      ESLint rules (recommended set, browser globals, Prettier compatible)
.prettierrc.json      Prettier settings: 4 spaces, single quotes
.prettierignore       Files Prettier leaves alone
package.json          Dependencies and npm scripts
public/favicon.svg    The tab icon, copied into the build as is
```

## Lesson map

The "Our First Project" module walks through this code. Each lesson presents these files and functions.

### 1. Project Setup

- `npm create vite@latest reading-list -- --template vanilla`, then deleting the demo code
- The folder layout: `index.html`, `src/`, `tests/`, `public/`
- ES modules: `<script type="module" src="/src/main.js">`, `import` / `export` between the `src/` files, `import './style.css'` in `main.js`
- `.prettierrc.json`, `.prettierignore`, `eslint.config.js`
- `package.json` scripts: `dev`, `build`, `preview`, `test`, `lint`, `format`

### 2. Rendering the List

- `src/state.js`: the shape of a book (`key`, `title`, `author`, `year`, `coverId`, `read`), `countBooks`, `countsText`
- `index.html`: the `#book-template` `<template>`
- `src/render.js`: `fromTemplate`, `bookItem`, `emptyItem`, `renderList`; why `textContent` and not `innerHTML`; the `aria-label`s that add the book title to the short button text
- `src/main.js`: the `books` variable and `render()`

### 3. Handling User Actions

- `src/state.js`: `hasBook`, `addBook`, `removeBook`, `toggleRead`, and why they return new arrays instead of changing the old one
- `src/main.js`: `setBooks`, the click listener on `#book-list` (event delegation with `data-action` and `closest`), `focusRow` (giving keyboard focus back after a re-render; the `tabindex="-1"` heading in `index.html`), the `submit` listener on `#add-form` (`preventDefault`, `FormData`, `crypto.randomUUID`, `reset`)

### 4. Searching Books with Fetch

- `src/api.js`: `searchBooks(query, { signal })`, `URLSearchParams`, checking `response.ok`, `toBook` (optional chaining and `??`), `coverUrl`
- `src/debounce.js`: `debounce`
- `src/main.js`: `search`, `setSearch`, `runSearch` (the 2-character minimum, `AbortController`, ignoring `AbortError`), the debounced `input` listener, the click listener on `#results` (and moving focus to the next "Add to list" button, or back to the search box)
- `src/state.js`: `searchMessage` (loading, error, no results, results)
- `src/render.js`: `resultItem`, `renderResults`, `renderStatus` and the `aria-live` region in `index.html`

### 5. Saving to localStorage

- `src/storage.js`: `STORAGE_KEY` and why it has a version, `loadBooks` (`JSON.parse`, `try` / `catch`, checking the shape with `isBook`), `saveBooks`, `browserStorage` (reading `localStorage` itself throws when site data is blocked)
- `src/main.js`: `const storage = browserStorage()` and `loadBooks(storage)` on start, `saveBooks` inside `setBooks`

### 6. Testing and Building

- Vitest: `tests/state.test.js`, `tests/storage.test.js` (`fakeStorage`), `tests/api.test.js` (`vi.fn`, `vi.stubGlobal`), `tests/debounce.test.js` (`vi.useFakeTimers`, `vi.advanceTimersByTime`)
- `npm run build`: what ends up in `dist/` (hashed JS and CSS files, the copied `public/` files)
- `npm run preview`: checking the built site locally
- Publishing: upload the contents of `dist/` to any static host. If the site will live in a subfolder (for example GitHub Pages at `/reading-list/`), set `base` in a `vite.config.js` first.
