# Handling User Actions

Code for the lecture *Handling User Actions* (section 21, Our First Project) of the JavaScript course at gbachev.com.

## The files of this lecture

- [`src/state.js`](../reading-list/src/state.js) - `hasBook()`, `addBook()`, `removeBook()` and `toggleRead()`, which return new arrays
- [`src/main.js`](../reading-list/src/main.js) - `setBooks()`, the click listener on `#book-list`, `focusRow()` and the `submit` listener on `#add-form`
- [`index.html`](../reading-list/index.html) - `tabindex="-1"` on the "My list" heading, and the "Add a book by hand" form

## Run the app

The finished app is in [`reading-list/`](../reading-list), with its own `package.json`. From the repository folder:

```bash
cd 21-our-first-project/reading-list
npm install       # once: installs Vite, Vitest, ESLint and Prettier
npm run dev       # open the URL it prints, http://localhost:5173/
```

The folder holds the app as it is at the end of the section, so the page already does more than this lecture builds.

## Examples
- `examples/01-try-state.js` - the lecture's `try-state.js`: `addBook()`, `toggleRead()` and `removeBook()` leave the old array alone

Run it with `node 21-our-first-project/handling-user-actions/examples/01-try-state.js` from the repository folder. It imports the app's own `src/state.js`, so it needs no `npm install`.

## Tasks
1. **Mark all read** (`tasks/01-mark-all-read.js`) - a pure action that marks every book read
2. **A book from the form** (`tasks/02-book-from-form.js`) - fix the two bugs in the code that turns the form fields into a book
3. **Edit a book** (`tasks/03-update-book.js`) - change some properties of one book and return a new list

Run the tests with `npm test -- 21-our-first-project/handling-user-actions` from the repository folder (no `npm install` needed). They fail until the task is solved. Compare with `solutions/` after you try.
