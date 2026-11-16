const list = document.querySelector("#books");

list.addEventListener("book:added", (event) => {
    const { key, title } = event.detail;
    console.log(`Added ${title} (${key})`);
});

const book = { key: "neuromancer", title: "Neuromancer" };
list.dispatchEvent(new CustomEvent("book:added", { detail: book }));
// Added Neuromancer (neuromancer)

console.log(new CustomEvent("book:added").detail); // null
