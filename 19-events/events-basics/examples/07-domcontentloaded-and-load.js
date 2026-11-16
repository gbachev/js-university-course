const books = document.querySelectorAll("li");
console.log(`app.js: ${books.length} books`);

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded");
});

window.addEventListener("load", () => {
    console.log("load");
});
// app.js: 2 books
// DOMContentLoaded
// load
