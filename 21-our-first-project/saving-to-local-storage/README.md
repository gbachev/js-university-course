# Saving to localStorage

Code for the lecture *Saving to localStorage* (section 21, Our First Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`src/storage.js`](../reading-list/src/storage.js) - `STORAGE_KEY`, `isBook()`, `loadBooks()`, `saveBooks()` and `browserStorage()`
- [`src/main.js`](../reading-list/src/main.js) - `browserStorage()` and `loadBooks()` on start, `saveBooks()` inside `setBooks()`

## Run the app

The finished app is in [`reading-list/`](../reading-list), with its own `package.json`. From the repository folder:

```bash
cd 21-our-first-project/reading-list
npm install       # once: installs Vite, Vitest, ESLint and Prettier
npm run dev       # open the URL it prints, http://localhost:5173/
```

The folder holds the app as it is at the end of the section, so the page already does more than this lecture builds.

In DevTools, the Application panel shows the saved list under Local storage, in the `reading-list:v1` key.

## Examples
- `examples/01-try-storage.js` - the lecture's `try-storage.js`: `loadBooks()` with a missing, a broken and a badly shaped saved list

Run it with `node 21-our-first-project/saving-to-local-storage/examples/01-try-storage.js` from the repository folder. It imports the app's own `src/storage.js`, so it needs no `npm install`.

## Tasks
1. **Did it save?** (`tasks/01-save-result.js`) - make `saveBooks()` return whether the list was saved
2. **A stricter shape check** (`tasks/02-stricter-is-book.js`) - check all six properties of a saved book
3. **From version 1 to version 2** (`tasks/03-migrate-v1-to-v2.js`) - move a saved v1 list to the v2 format with a `status`

Run the tests with `npm test -- 21-our-first-project/saving-to-local-storage` from the repository folder (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
