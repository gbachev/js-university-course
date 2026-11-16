import { check, equal, ok, source } from '/lib/browser-check.js';

await import(source('02-book-card.js'));

function newCard(name, author) {
    const card = document.createElement('book-card');
    ok(card.shadowRoot, 'the card has no open shadow root: attach it in the constructor');
    card.setAttribute('name', name);
    card.setAttribute('author', author);
    document.body.append(card);
    return card;
}

check('book-card is a registered custom element', () => {
    const BookCard = customElements.get('book-card');
    ok(BookCard, 'book-card is not defined');
    ok(document.createElement('book-card') instanceof HTMLElement);
});

check('the card on the page shows its name and author', () => {
    const card = document.querySelector('book-card');
    ok(card.shadowRoot, 'the card has no open shadow root: attach it in the constructor');
    equal(card.shadowRoot.querySelector('.name').textContent, 'Clean Code');
    equal(card.shadowRoot.querySelector('.author').textContent, 'by Robert C. Martin');
});

check('a card created in JavaScript is filled once it is on the page', () => {
    const card = newCard('Refactoring', 'Martin Fowler');
    equal(card.shadowRoot.querySelector('.name').textContent, 'Refactoring');
    card.remove();
});

check('the card keeps its insides in an open shadow root', () => {
    const card = document.querySelector('book-card');
    ok(card.shadowRoot, 'the card has no open shadow root: attach it in the constructor');
    equal(card.shadowRoot.mode, 'open');
    equal(card.children.length, 0);
    equal(document.querySelector('.name'), null);
});

check('a name with markup shows up as plain text', () => {
    const card = newCard('<b>Dune</b>', 'Frank Herbert');
    equal(card.shadowRoot.querySelector('b'), null);
    equal(card.shadowRoot.querySelector('.name').textContent, '<b>Dune</b>');
    card.remove();
});
