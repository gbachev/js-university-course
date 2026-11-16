const list = document.querySelector("#book-list");

// better: walk up from the target, and stay inside the list
list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button || !list.contains(button)) {
        return;
    }
    console.log("closest", button.dataset.action);
});

list.querySelector(".icon").click(); // closest remove
