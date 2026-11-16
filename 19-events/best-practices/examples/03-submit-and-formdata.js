const form = document.querySelector("#add-book");

// better: submit fires only for a valid form, however it is sent
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const book = {
        title: data.get("title"),
        tags: data.getAll("tags")
    };
    console.log(book);
});

form.elements.title.value = "Dune";
form.elements.tags[1].checked = true;
form.requestSubmit();
// { title: 'Dune', tags: ['sci-fi'] }
