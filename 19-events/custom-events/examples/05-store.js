// EventTarget and CustomEvent are globals in Node too, so this file runs with node.
class Store extends EventTarget {
    constructor(books) {
        super();
        this.books = books;
    }

    add(book) {
        this.books = [...this.books, book];
        this.notify();
    }

    remove(key) {
        this.books = this.books.filter((book) => book.key !== key);
        this.notify();
    }

    notify() {
        const detail = { books: this.books };
        this.dispatchEvent(new CustomEvent("books:changed", { detail }));
    }
}

const store = new Store([{ key: "dune", title: "Dune" }]);

store.addEventListener("books:changed", (event) => {
    const titles = event.detail.books.map((book) => book.title);
    console.log(`List: ${titles.join(", ")}`);
});
store.addEventListener("books:changed", (event) => {
    console.log("Saved", event.detail.books.length);
});

store.add({ key: "emma", title: "Emma" });
// List: Dune, Emma
// Saved 2
store.remove("dune");
// List: Emma
// Saved 1
