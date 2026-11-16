const list = document.querySelector("#books");
const heading = document.querySelector("#list-heading");

list.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
        return;
    }
    const item = button.closest("li");
    const next = item.nextElementSibling ?? item.previousElementSibling;
    item.remove();
    const target = next?.querySelector("button") ?? heading;
    target.focus();
    console.log(document.activeElement.textContent);
});
// Tab to the first "Remove", then Enter:
// Remove
// Enter again:
// To Read
