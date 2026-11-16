// A classic script, not a module: at its top level, this is window.
const list = document.querySelector("#books");

list.addEventListener("click", function (event) {
    console.log(this === event.currentTarget); // true
    console.log(this.id); // books
});

list.addEventListener("click", (event) => {
    console.log(this === window); // true
    console.log(event.currentTarget.id); // books
});

list.firstElementChild.click();
