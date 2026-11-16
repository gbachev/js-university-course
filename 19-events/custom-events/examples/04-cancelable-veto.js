const list = document.querySelector("#books");

list.addEventListener("book:remove", (event) => {
    if (event.target.classList.contains("current")) {
        event.preventDefault();
    }
});

function tryRemove(item) {
    const event = new CustomEvent("book:remove", {
        bubbles: true,
        cancelable: true
    });
    if (item.dispatchEvent(event)) {
        item.remove();
    }
    console.log(item.dataset.key, list.contains(item));
}

const [dune, emma] = list.children;
tryRemove(dune); // dune false
tryRemove(emma); // emma true

const plain = new CustomEvent("book:remove", { bubbles: true });
console.log(emma.dispatchEvent(plain)); // true
console.log(plain.defaultPrevented); // false
