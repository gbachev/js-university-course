const title = document.querySelector("#add-book").elements.title;

document.addEventListener("keydown", (event) => {
    const inField = event.target.closest("input, select, textarea");
    if (inField || event.ctrlKey || event.metaKey || event.altKey) {
        return;
    }
    if (event.key === "/") {
        event.preventDefault();
        title.focus();
        console.log("Shortcut");
    }
});
// Clicking the page, then pressing /:
// Shortcut
