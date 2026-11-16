// Task 2: Search as we type
// Lecture: Forms and Input Events
//
// setUpSearch(input, list) filters our reading list: a book whose title does not
// contain the text in the search box gets hidden (its hidden property is true), upper
// or lower case does not matter, and an empty box shows every book. Right now the list
// changes only when we leave the box. Fix it, so it filters on every keystroke. Then
// finish the keydown listener: Escape in the box empties it and shows every book again.
//
// Examples:
//   typing "du"     only Dune is shown
//   typing "MA"     Emma and Neuromancer are shown
//   Escape          the box is empty, all four books are shown
//
// Open the page: npm run serve, then 19-events/forms-and-input-events/tasks/02-live-search.html

export function filterBooks(list, text) {
    const query = text.trim().toLowerCase();
    for (const book of list.children) {
        book.hidden = !book.textContent.toLowerCase().includes(query);
    }
}

export function setUpSearch(input, list) {
    input.addEventListener('change', () => {
        filterBooks(list, input.value);
    });

    input.addEventListener('keydown', (event) => {
        // Your code here
    });
}
