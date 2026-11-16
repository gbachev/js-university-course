const button = document.querySelector("#add");
const list = document.querySelector("#books");

function addBook() {
    const book = document.createElement("li");
    book.textContent = "Neuromancer";
    list.append(book);
    console.log(`${list.children.length} books`);
}

button.addEventListener("click", addBook);
button.addEventListener("click", addBook);
button.click(); // 3 books

button.removeEventListener("click", () => addBook());
button.click(); // 4 books

button.removeEventListener("click", addBook);
button.click();
console.log(list.children.length); // 4
