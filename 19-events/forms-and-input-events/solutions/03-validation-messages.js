export function setUpValidation(form, list, error) {
    const title = form.elements.title;
    form.noValidate = true;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const value = title.value.trim();
        const titles = [...list.children].map((book) => book.textContent.toLowerCase());
        const taken = titles.includes(value.toLowerCase());
        title.setCustomValidity(taken ? 'Already on your list' : '');

        if (value === '') {
            error.textContent = 'Enter a title';
            return;
        }
        if (taken) {
            error.textContent = title.validationMessage;
            return;
        }

        const book = document.createElement('li');
        book.textContent = value;
        list.append(book);
        error.textContent = '';
        title.value = '';
    });
}
