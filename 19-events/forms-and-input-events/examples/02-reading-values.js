const form = document.querySelector("#add-book");
const { title, shelf, tags } = form.elements;

title.value = "Dune";
shelf.value = "reading";
tags[0].checked = true;
tags[1].checked = true;
console.log(title.value, shelf.value, tags.length); // Dune reading 2

const data = new FormData(form);
console.log(data.get("tags")); // classic
console.log(data.getAll("tags")); // ['classic', 'sci-fi']

const book = Object.fromEntries(data);
console.log(book.title, book.tags); // Dune sci-fi

book.tags = data.getAll("tags");
console.log(book.tags); // ['classic', 'sci-fi']
