# Testing and Building

Code for the lecture *Testing and Building* (section 21, Our First Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`tests/state.test.js`](../reading-list/tests/state.test.js) - the pure functions of `state.js`
- [`tests/storage.test.js`](../reading-list/tests/storage.test.js) - `loadBooks()` and `saveBooks()` with `fakeStorage()`, and `browserStorage()`
- [`tests/api.test.js`](../reading-list/tests/api.test.js) - `searchBooks()` with `mockFetch()`, `vi.fn()` and `vi.stubGlobal()`
- [`tests/debounce.test.js`](../reading-list/tests/debounce.test.js) - `debounce()` with fake timers

## Run the tests and the build

The finished app is in [`reading-list/`](../reading-list), with its own `package.json`. From the repository folder:

```bash
cd 21-our-first-project/reading-list
npm install       # once: installs Vite, Vitest, ESLint and Prettier
npm test          # the app's Vitest tests
npm run build     # builds the site into dist/
npm run preview   # serves dist/, open http://localhost:4173/
```

The project has no `vite.config.js`: it only needs one, with `base`, when the site is published in a subfolder such as GitHub Pages.

## Tasks
1. **A fuller fake storage** (`tasks/01-fake-storage.js`) - add `removeItem()`, `clear()` and `length` to `fakeStorage()`
2. **What the tests found** (`tasks/02-what-the-tests-found.js`) - fix an "optimized" `addBook()` and `toggleRead()` that change the list they receive
3. **Paths for a subfolder** (`tasks/03-with-base.js`) - put a `base` folder in front of a URL, the way Vite does in the build

Run the tests with `npm test -- 21-our-first-project/testing-and-building` from the repository folder (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
