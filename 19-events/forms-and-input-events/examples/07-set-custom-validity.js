const form = document.querySelector("#add-book");
const title = form.elements.title;
const list = document.querySelector("#books");
form.noValidate = true;

title.addEventListener("input", () => {
    const titles = [...list.children].map((li) => li.textContent);
    const taken = titles.includes(title.value.trim());
    title.setCustomValidity(taken ? "Already on your list" : "");
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) {
        console.log(title.validationMessage);
        return;
    }
    console.log(`Added ${title.value}`);
});
// Typing Dune, then Enter:
// Already on your list
// Changing it to Emma, then Enter:
// Added Emma
