export function filterBooks(list, text) {
    const query = text.trim().toLowerCase();
    for (const book of list.children) {
        book.hidden = !book.textContent.toLowerCase().includes(query);
    }
}

export function setUpSearch(input, list) {
    // input fires on every keystroke, change only when we leave the box.
    input.addEventListener('input', () => {
        filterBooks(list, input.value);
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            input.value = '';
            filterBooks(list, '');
        }
    });
}
