export function BookItem({ book, onRemove }) {
    const row = document.createElement('li');
    row.classList.toggle('is-read', book.read);

    const title = document.createElement('span');
    title.className = 'title';
    title.textContent = book.title;
    row.append(title);

    if (book.author) {
        const author = document.createElement('span');
        author.className = 'author';
        author.textContent = `by ${book.author}`;
        row.append(' ', author);
    }

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = 'Remove';
    button.setAttribute('aria-label', `Remove ${book.title}`);
    button.addEventListener('click', () => onRemove(book.key));

    row.append(' ', button);
    return row;
}
