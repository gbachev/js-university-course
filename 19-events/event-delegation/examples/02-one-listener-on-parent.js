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
