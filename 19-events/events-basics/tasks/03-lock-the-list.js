// Task 3: Lock the list
// Lecture: Events Basics
//
// Two buttons edit our reading list: "Add a book" adds a book called "New book", and
// "Clear the list" removes every book. The "Lock the list" button should switch both
// of them off for good: after a click on it, their clicks change nothing, and the lock
// button itself gets disabled. Finish setUpEditing(addButton, clearButton, lockButton,
// list). Use one AbortController: add the two editing listeners with its signal, and
// abort it in the listener of the lock button.
//
// Examples:
//   add, add, clear, add   the list has 1 book
//   lock, then add, clear  the list still has 1 book, the lock button is disabled
//
// Open the page: npm run serve, then 19-events/events-basics/tasks/03-lock-the-list.html

export function setUpEditing(addButton, clearButton, lockButton, list) {
    addButton.addEventListener('click', () => {
        const book = document.createElement('li');
        book.textContent = 'New book';
        list.append(book);
    });

    clearButton.addEventListener('click', () => {
        list.replaceChildren();
    });

    lockButton.addEventListener('click', () => {
        // Your code here
    });
}
