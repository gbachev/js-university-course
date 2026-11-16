# Rendering the List

Code for the lecture *Rendering the List* (section 21, Our First Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`src/state.js`](../reading-list/src/state.js) - `countBooks()` and `countsText()`
- [`index.html`](../reading-list/index.html) - the `#book-template` `<template>` for one book row
- [`src/render.js`](../reading-list/src/render.js) - `fromTemplate()`, `bookItem()`, `emptyItem()` and `renderList()`
- [`src/api.js`](../reading-list/src/api.js) - at this point only `coverUrl()`
- [`src/main.js`](../reading-list/src/main.js) - the `books` variable and `render()` (the lecture starts it with two sample books)

## Run the app

The finished app is in [`reading-list/`](../reading-list), with its own `package.json`. From the repository folder:

```bash
cd 21-our-first-project/reading-list
npm install       # once: installs Vite, Vitest, ESLint and Prettier
npm run dev       # open the URL it prints, http://localhost:5173/
```

The folder holds the app as it is at the end of the section, so the page already does more than this lecture builds.

## Tasks
1. **A friendlier counts line** (`tasks/01-counts-text.js`) - change `countsText()` for an empty list and a list that is all read
2. **Show only unread books** (`tasks/02-filter-books.js`) - pick the books to show for the filters all, read and unread
3. **Sort the list** (`tasks/03-sort-books.js`) - sort a copy of the list by title, author or year

Run the tests with `npm test -- 21-our-first-project/rendering-the-list` from the repository folder (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
