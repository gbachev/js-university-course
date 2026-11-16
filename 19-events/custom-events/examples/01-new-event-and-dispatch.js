const list = document.querySelector("#books");

list.addEventListener("books:refresh", (event) => {
    console.log("refreshing", event.isTrusted);
});

console.log("before");
const result = list.dispatchEvent(new Event("books:refresh"));
console.log("after", result);
// before
// refreshing false
// after true
