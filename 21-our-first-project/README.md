# 21. Our First Project

We build one app from an empty folder: the Reading List, which searches Open Library, keeps a list of books, marks them read and saves the list in the browser.

**The finished app is in [`reading-list/`](reading-list).** It has its own `package.json` and README: `cd 21-our-first-project/reading-list`, `npm install`, `npm run dev`. Each lecture folder below lists the files of the app that lecture builds and has tasks that extend its functions. The tasks need no `npm install`: `npm test -- 21-our-first-project` runs them from the repository folder.

1. Section Overview (no code)
2. [Project Setup](project-setup) - a Vite project, the folder layout, ES modules, Prettier, ESLint and the npm scripts
3. [Rendering the List](rendering-the-list) - the books in one array and a `render()` that draws the list from a `<template>`
4. [Handling User Actions](handling-user-actions) - functions that return a new list, event delegation, focus and the add form
5. [Searching Books with Fetch](searching-books-with-fetch) - `fetch()` with `async`/`await`, loading and error messages, debounce and `AbortController`
6. [Saving to localStorage](saving-to-local-storage) - a versioned key, JSON and a load that survives broken data
7. [Testing and Building](testing-and-building) - the app's Vitest tests with fakes, `npm run build` and publishing
8. Best Practices - the habits of the project; their code is in [`reading-list/`](reading-list)
9. Section Review (no code)
