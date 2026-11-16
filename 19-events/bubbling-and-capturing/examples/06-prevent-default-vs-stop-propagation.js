const box = document.querySelector("#hide-read");
document.body.addEventListener("click", () => {
    console.log("body heard it");
});

const cancel = (event) => event.preventDefault();
box.addEventListener("click", cancel);
box.click(); // body heard it
console.log(box.checked); // false

box.removeEventListener("click", cancel);
box.addEventListener("click", (event) => event.stopPropagation());
box.click();
console.log(box.checked); // true
