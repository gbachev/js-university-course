const list = document.querySelector("#book-list");

// the work: a plain function we can call from anywhere
function markRead(item) {
    item.classList.add("is-read");
    const detail = { key: item.dataset.key };
    list.dispatchEvent(new CustomEvent("book:read", { detail }));
}

// the listener: find the item, hand it over
list.addEventListener("click", (event) => {
    const button = event.target.closest('[data-action="toggle"]');
    if (button && list.contains(button)) {
        markRead(button.closest("li"));
    }
});

list.addEventListener("book:read", (event) => {
    console.log(`Read: ${event.detail.key}`);
});

list.querySelector('[data-action="toggle"]').click(); // Read: dune
markRead(list.lastElementChild); // Read: emma
