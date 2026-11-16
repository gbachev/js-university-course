// The listener from the previous example, still on the list.
const list = document.querySelector("#book-list");

list.addEventListener("click", (event) => {
    const button = event.target.closest('[data-action="remove"]');
    if (!button) {
        return;
    }
    const item = button.closest("li");
    item.remove();
    console.log(`Removed ${item.dataset.key}`);
});

list.querySelector(".title").click(); // (nothing)
list.querySelector(".icon").click(); // Removed dune

// Now we add Neuromancer exactly as before.
const book = document.createElement("li");
book.dataset.key = "neuromancer";
const remove = document.createElement("button");
remove.dataset.action = "remove";
remove.textContent = "Remove";
book.append("Neuromancer ", remove);
document.querySelector("#book-list").append(book);

remove.click(); // Removed neuromancer
console.log(document.querySelector("#book-list").children.length);
// 1
