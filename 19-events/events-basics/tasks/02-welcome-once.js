// Task 2: Welcome only once
// Lecture: Events Basics
//
// Our "Add a book" button adds a book called "New book" to the list on every click.
// On the first click it should also greet the reader with a paragraph that says
// "Welcome to your reading list" in the messages box. setUpAddButton(button, list,
// messages) adds both listeners, but the welcome shows up on every click. Fix it with
// the right option of addEventListener(), so the welcome listener runs only once while
// the books keep coming.
//
// Examples:
//   three clicks   three books in the list, one welcome paragraph
//
// Open the page: npm run serve, then 19-events/events-basics/tasks/02-welcome-once.html

export function setUpAddButton(button, list, messages) {
    button.addEventListener('click', () => {
        const book = document.createElement('li');
        book.textContent = 'New book';
        list.append(book);
    });

    button.addEventListener('click', () => {
        const welcome = document.createElement('p');
        welcome.textContent = 'Welcome to your reading list';
        messages.append(welcome);
    });
}
