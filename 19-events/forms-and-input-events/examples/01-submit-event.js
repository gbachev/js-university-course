const form = document.querySelector("#add-book");
const list = document.querySelector("#books");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const book = document.createElement("li");
    book.textContent = form.elements.title.value;
    list.append(book);
    console.log(`Added ${book.textContent}`);
});

form.requestSubmit();
form.elements.title.value = "Emma";
form.requestSubmit(); // Added Emma
