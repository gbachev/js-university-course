const list = document.querySelector("#books");
const dune = list.querySelector('[data-key="dune"]');

list.addEventListener("book:selected", (event) => {
    console.log("list heard", event.target.dataset.key);
});

dune.dispatchEvent(new CustomEvent("book:selected"));
dune.dispatchEvent(new CustomEvent("book:selected", { bubbles: true }));
// list heard dune
