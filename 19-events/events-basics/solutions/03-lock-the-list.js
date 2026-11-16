export function setUpEditing(addButton, clearButton, lockButton, list) {
    const editing = new AbortController();

    addButton.addEventListener(
        'click',
        () => {
            const book = document.createElement('li');
            book.textContent = 'New book';
            list.append(book);
        },
        { signal: editing.signal }
    );

    clearButton.addEventListener('click', () => list.replaceChildren(), {
        signal: editing.signal,
    });

    lockButton.addEventListener('click', () => {
        // One abort() removes both editing listeners.
        editing.abort();
        lockButton.disabled = true;
    });
}
