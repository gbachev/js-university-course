const list = document.querySelector("#books");
const statusEl = document.querySelector("#status");
const add = document.querySelector("#add");

add.addEventListener("click", () => {
    const book = document.createElement("li");
    book.textContent = "Neuromancer";
    list.append(book);
    const count = list.children.length;
    statusEl.textContent = `Neuromancer added, ${count} books`;
    console.log(statusEl.textContent);
});

add.click(); // Neuromancer added, 3 books
