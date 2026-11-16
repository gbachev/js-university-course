const link = document.querySelector("#more");
const search = document.querySelector("#search");

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.defaultPrevented); // true
});

search.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Searching without a reload");
});

link.click();
search.querySelector("button").click();
// Searching without a reload
