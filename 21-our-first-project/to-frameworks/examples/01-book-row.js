// The row as a component: it gets its data as one object, the props.
function BookRow({ book, onToggle }) {
    const row = document.createElement('li');
    row.classList.toggle('is-read', book.read);

    const title = document.createElement('span');
    title.textContent = book.title;

    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = book.read ? 'Mark unread' : 'Mark read';
    button.addEventListener('click', () => onToggle(book.key));

    row.append(title, button);
    return row;
}

// The owner of the list: data goes down through props, events come back up.
const toggleRead = (books, key) =>
    books.map((book) =>
        book.key === key ? { ...book, read: !book.read } : book,
    );

let books = [
    { key: 'dune', title: 'Dune', read: false },
    { key: 'emma', title: 'Emma', read: true },
];
const list = document.createElement('ul');
document.body.append(list);

function render() {
    list.replaceChildren(
        ...books.map((book) => BookRow({ book, onToggle })),
    );
}

function onToggle(key) {
    books = toggleRead(books, key);
    render();
}

render();
list.querySelector('button').click();
console.log(books[0].read); // true
console.log(list.querySelector('button').textContent); // Mark unread
