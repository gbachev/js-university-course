import { coverUrl } from './api.js';
import { countsText, hasBook, searchMessage } from './state.js';

const resultTemplate = document.querySelector('#result-template');
const bookTemplate = document.querySelector('#book-template');

// Copy a <template> and fill in the parts every book shows.
// textContent treats the data as plain text, never as HTML.
function fromTemplate(template, book) {
    const item = template.content.firstElementChild.cloneNode(true);
    item.dataset.key = book.key;
    item.querySelector('.title').textContent = book.title;
    item.querySelector('.author').textContent = book.year
        ? `${book.author}, ${book.year}`
        : book.author;

    const cover = item.querySelector('.cover');
    if (book.coverId) {
        cover.src = coverUrl(book.coverId);
        cover.alt = `Cover of ${book.title}`;
    } else {
        cover.remove();
    }
    return item;
}

// Every row has the same short button text. The aria-label starts
// with that text and adds the title, so a screen reader says
// "Remove Dune", not just "Remove", and voice control still
// matches the words on the button.
function resultItem(book, books) {
    const item = fromTemplate(resultTemplate, book);
    const button = item.querySelector('[data-action="add"]');
    if (hasBook(books, book.key)) {
        button.textContent = 'In your list';
        button.disabled = true;
        button.setAttribute('aria-label', `In your list: ${book.title}`);
    } else {
        button.setAttribute('aria-label', `Add to list: ${book.title}`);
    }
    return item;
}

function bookItem(book) {
    const item = fromTemplate(bookTemplate, book);
    const toggle = item.querySelector('[data-action="toggle"]');
    const remove = item.querySelector('[data-action="remove"]');
    const nextState = book.read ? 'unread' : 'read';

    item.classList.toggle('is-read', book.read);
    toggle.textContent = `Mark ${nextState}`;
    toggle.setAttribute('aria-label', `Mark ${nextState}: ${book.title}`);
    remove.setAttribute('aria-label', `Remove ${book.title}`);
    return item;
}

function emptyItem() {
    const item = document.createElement('li');
    item.className = 'empty';
    item.textContent = 'Your list is empty. Search for a book to add it.';
    return item;
}

export function renderResults(resultsEl, results, books) {
    resultsEl.replaceChildren(
        ...results.map((book) => resultItem(book, books)),
    );
}

export function renderList(listEl, countsEl, books) {
    countsEl.textContent = countsText(books);
    listEl.replaceChildren(
        ...(books.length ? books.map(bookItem) : [emptyItem()]),
    );
}

export function renderStatus(statusEl, search) {
    const message = searchMessage(search);
    // Only touch the live region when the text changes,
    // or screen readers announce the same message again.
    if (statusEl.textContent !== message) {
        statusEl.textContent = message;
    }
}
