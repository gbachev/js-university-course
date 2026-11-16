const list = document.querySelector("#book-list");

list.addEventListener("click", (event) => {
    const item = event.target.closest("li");
    console.log(item.dataset.key, list.contains(item));
});

list.querySelector(".title").click(); // dune true
list.click(); // undefined false
