export function addBook(list, book) {
    const item = document.createElement('li');
    const title = document.createElement('strong');
    // textContent never parses its string as HTML.
    title.textContent = book.title;
    item.append(title, ` added by ${book.addedBy}`);
    list.append(item);
}
