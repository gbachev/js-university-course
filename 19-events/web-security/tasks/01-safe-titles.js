// Task 1: Titles stay text
// Lecture: Web Security Basics
//
// Our shared reading list shows every book with the name of the person who added it,
// and both come from users. addBook(list, book) builds the row with innerHTML, so a
// title like <img src="x" onerror="..."> runs its code in our page. Fix addBook(): it
// still appends one li with the title in a <strong> and " added by " and the name
// after it, but the title and the name always stay plain text, whatever they contain.
//
// Examples:
//   addBook(list, { title: 'Dune', addedBy: 'John Doe' })
//   // <li><strong>Dune</strong> added by John Doe</li>
//   addBook(list, { title: '<img src="x" onerror="...">', addedBy: 'Jane' })
//   // the title shows as text, no image, no code runs
//
// Open the page: npm run serve, then 19-events/web-security/tasks/01-safe-titles.html

export function addBook(list, book) {
    const item = document.createElement('li');
    item.innerHTML = `<strong>${book.title}</strong> added by ${book.addedBy}`;
    list.append(item);
}
