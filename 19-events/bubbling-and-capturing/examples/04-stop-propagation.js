const [dune, emma] = document.querySelectorAll(".book button");
const list = document.querySelector("#books");
list.addEventListener("click", () => console.log("list"));

dune.addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Dune 1");
});
dune.addEventListener("click", () => console.log("Dune 2"));

emma.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    console.log("Emma 1");
});
emma.addEventListener("click", () => console.log("Emma 2"));

dune.click();
// Dune 1
// Dune 2
emma.click(); // Emma 1
