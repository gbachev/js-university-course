const clear = document.querySelector("#clear");
const add = document.querySelector("#add");

clear.addEventListener("click", () => console.log("Cleared"));
add.addEventListener("click", () => console.log("Added"));

console.log(add.tabIndex); // 0
console.log(clear.tabIndex); // -1
// Tab to "Add a book", then Enter:
// Added
// Tab never stops on "Clear list".
