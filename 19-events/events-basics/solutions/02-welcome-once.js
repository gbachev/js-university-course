export function setUpAddButton(button, list, messages) {
    button.addEventListener('click', () => {
        const book = document.createElement('li');
        book.textContent = 'New book';
        list.append(book);
    });

    button.addEventListener(
        'click',
        () => {
            const welcome = document.createElement('p');
            welcome.textContent = 'Welcome to your reading list';
            messages.append(welcome);
        },
        { once: true }
    );
}
