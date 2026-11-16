import './style.css';
import { searchBooks } from './api.js';
import { debounce } from './debounce.js';
import { renderList, renderResults, renderStatus } from './render.js';
import { addBook, removeBook, toggleRead } from './state.js';
import { browserStorage, loadBooks, saveBooks } from './storage.js';

const searchInput = document.querySelector('#search-input');
const statusEl = document.querySelector('#search-status');
const resultsEl = document.querySelector('#results');
const listEl = document.querySelector('#book-list');
const listHeading = document.querySelector('#list-heading');
const countsEl = document.querySelector('#counts');
const addForm = document.querySelector('#add-form');

const storage = browserStorage();

// All the app's data lives here. Events change it, then render() redraws.
let books = loadBooks(storage);
let search = { status: 'idle', query: '', results: [], error: '' };
let controller = null;

function render() {
    renderStatus(statusEl, search);
    renderResults(resultsEl, search.results, books);
    renderList(listEl, countsEl, books);
}

function setBooks(nextBooks) {
    books = nextBooks;
    saveBooks(storage, books);
    render();
}

function setSearch(changes) {
    search = { ...search, ...changes };
    render();
}

async function runSearch(query) {
    // A newer search makes the previous request useless, so cancel it.
    controller?.abort();

    if (query.length < 2) {
        setSearch({ status: 'idle', query, results: [] });
        return;
    }

    controller = new AbortController();
    setSearch({ status: 'loading', query });
    try {
        const results = await searchBooks(query, { signal: controller.signal });
        setSearch({ status: 'done', results });
    } catch (error) {
        // We cancelled this request ourselves. That is not a failure.
        if (error.name === 'AbortError') {
            return;
        }
        setSearch({ status: 'error', results: [], error: error.message });
    }
}

searchInput.addEventListener(
    'input',
    debounce(() => runSearch(searchInput.value.trim()), 300),
);

// One listener on each list handles the buttons of every item in it,
// including items that are rendered later (event delegation).
resultsEl.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action="add"]');
    if (!button) {
        return;
    }
    const { key } = button.closest('li').dataset;
    const index = search.results.findIndex((result) => result.key === key);
    setBooks(addBook(books, search.results[index]));

    // The pressed button is now disabled and cannot keep focus.
    // Move on to the next book that can still be added, or the search box.
    const buttons = [...resultsEl.querySelectorAll('[data-action="add"]')];
    const next = buttons.slice(index + 1).find((other) => !other.disabled);
    const target = next ?? searchInput;
    target.focus();
});

listEl.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action]');
    if (!button) {
        return;
    }
    const { action } = button.dataset;
    const { key } = button.closest('li').dataset;
    const index = books.findIndex((book) => book.key === key);
    if (action === 'toggle') {
        setBooks(toggleRead(books, key));
    }
    if (action === 'remove') {
        setBooks(removeBook(books, key));
    }
    focusRow(index, action);
});

// render() replaced the button that had focus, so the browser dropped
// focus to the top of the page. Put it back on the same button in the
// row at the same position: the same book after a toggle, the next book
// after a remove (or the last one). With no rows left, use the heading.
function focusRow(index, action) {
    const buttons = listEl.querySelectorAll(`[data-action="${action}"]`);
    const target = buttons[Math.min(index, buttons.length - 1)] ?? listHeading;
    target.focus();
}

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(addForm);
    const title = data.get('title').trim();
    if (!title) {
        return;
    }
    const book = {
        key: crypto.randomUUID(),
        title,
        author: data.get('author').trim() || 'Unknown author',
        year: null,
        coverId: null,
    };
    setBooks(addBook(books, book));
    addForm.reset();
});

render();
