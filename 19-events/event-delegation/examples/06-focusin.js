const list = document.querySelector("#book-list");

list.addEventListener("focus", () => console.log("focus"));

list.addEventListener("focusin", (event) => {
    const item = event.target.closest("li");
    item.classList.add("is-active");
    console.log("focusin", item.dataset.key);
});
list.addEventListener("focusout", (event) => {
    const item = event.target.closest("li");
    item.classList.remove("is-active");
    console.log("focusout", item.dataset.key);
});

// now click Dune's "Mark read" button, then press Tab twice
// focusin dune
// focusout dune
// focusin dune
// focusout dune
// focusin emma
