export function addBook(list, key, title) {
    const book = document.createElement('li');
    book.dataset.key = key;
    const name = document.createElement('span');
    name.className = 'title';
    name.textContent = title;
    const remove = document.createElement('button');
    remove.dataset.action = 'remove';
    remove.textContent = 'Remove';
    book.append(name, ' ', remove);
    list.append(book);
}

export function setUpRemoving(list, count) {
    list.addEventListener('click', (event) => {
        // The click may land on the icon, so we walk up to the button.
        const button = event.target.closest('[data-action="remove"]');
        if (!button) {
            return;
        }
        button.closest('li').remove();
        const books = list.children.length;
        count.textContent = books === 1 ? '1 book' : `${books} books`;
    });
}
