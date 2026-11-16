export function renderBooks(list, template, books) {
    list.replaceChildren();

    for (const book of books) {
        const row = template.content.cloneNode(true);
        row.querySelector('.title').textContent = book.title;
        row.querySelector('.author').textContent = book.author;
        list.append(row);
    }
}
