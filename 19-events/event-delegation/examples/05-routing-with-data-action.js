const list = document.querySelector("#book-list");

list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button || !list.contains(button)) {
        return;
    }
    const item = button.closest("li");
    const { action } = button.dataset;

    if (action === "toggle") {
        const isRead = item.classList.toggle("is-read");
        button.textContent = isRead ? "Mark unread" : "Mark read";
    } else if (action === "remove") {
        item.remove();
    }
    console.log(action, item.dataset.key);
});

const emma = list.querySelector('[data-key="emma"]');
const toggle = emma.querySelector('[data-action="toggle"]');

toggle.click(); // toggle emma
console.log(emma.className, toggle.textContent);
// is-read Mark unread
emma.querySelector(".icon").click(); // remove emma
console.log(list.children.length); // 1
