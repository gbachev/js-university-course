// Task 1: One listener for the list
// Lecture: Event Delegation
//
// setUpRemoving(list, count) makes the Remove buttons of our reading list work: a click
// removes the book and updates the count, "1 book" or "N books". It gives every button
// its own listener, so a book we add later, like the one addBook() creates, cannot be
// removed. Rewrite setUpRemoving() with one listener on the list. A click can land on
// the icon inside a button, and a click on a title removes nothing. Leave addBook() as
// it is.
//
// Examples:
//   click the icon of Dune             Dune is gone, the count says "1 book"
//   addBook(list, 'neuromancer', 'Neuromancer'), then click its Remove
//                                      Neuromancer is gone too
//
// Open the page: npm run serve, then 19-events/event-delegation/tasks/01-one-listener.html

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
    function onRemoveClick(event) {
        event.currentTarget.closest('li').remove();
        const books = list.children.length;
        count.textContent = books === 1 ? '1 book' : `${books} books`;
    }

    const buttons = list.querySelectorAll('[data-action="remove"]');
    buttons.forEach((button) => {
        button.addEventListener('click', onRemoveClick);
    });
}
