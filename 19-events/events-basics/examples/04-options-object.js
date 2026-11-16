const button = document.querySelector("#add");
const list = document.querySelector("#books");

button.addEventListener(
    "click",
    () => console.log("Welcome to your reading list"),
    { once: true }
);

const controller = new AbortController();
const options = { signal: controller.signal };
button.addEventListener("click", () => console.log("add"), options);
list.addEventListener("click", () => console.log("list"), options);

button.click();
// Welcome to your reading list
// add
list.click(); // list

controller.abort();
button.click();
list.click();
console.log(controller.signal.aborted); // true
