const form = document.querySelector("#add-book");

function log(event) {
    console.log(event.type, event.target.name, event.target.value);
}
form.addEventListener("input", log);
form.addEventListener("change", log);

form.elements.tags[0].click();
// input tags classic
// change tags classic

form.elements.shelf.value = "reading"; // fires neither event

// Typing "Du" in the title box, then Tab:
// input title D
// input title Du
// change title Du
