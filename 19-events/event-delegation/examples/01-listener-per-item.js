const list = document.querySelector("#book-list");

function onRemoveClick(event) {
    const item = event.currentTarget.closest("li");
    item.remove();
    console.log(`Removed ${item.dataset.key}`);
}

const buttons = list.querySelectorAll('[data-action="remove"]');
buttons.forEach((button) => {
    button.addEventListener("click", onRemoveClick);
});
buttons[0].click(); // Removed dune

const book = document.createElement("li");
book.dataset.key = "neuromancer";
const remove = document.createElement("button");
remove.dataset.action = "remove";
remove.textContent = "Remove";
book.append("Neuromancer ", remove);
list.append(book);

remove.click(); // (nothing)
console.log(list.children.length); // 2
