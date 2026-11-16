export function setUpForm(form, list) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const book = document.createElement('li');
        book.textContent = data.get('title').trim();
        book.dataset.shelf = data.get('shelf');
        // get() would give us only the first checked tag.
        book.dataset.tags = data.getAll('tags').join(',');
        list.append(book);
        form.reset();
    });
}
