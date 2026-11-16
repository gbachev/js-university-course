// Build the rows off the page and insert them in one call.
const list = document.querySelector('#products');
const books = [
    { id: 104, title: 'Dune' },
    { id: 105, title: 'Emma' },
];

// considered bad practice: the list is parsed again per book
for (const book of books) {
    list.innerHTML += `<li>${book.title}</li>`;
}
console.log(list.children.length); // 5

// better: build the rows off the page, add them in one call
const rows = books.map((book) => {
    const row = document.createElement('li');
    row.dataset.productId = book.id;
    row.textContent = book.title;
    return row;
});
list.append(...rows);
console.log(list.children.length); // 7
