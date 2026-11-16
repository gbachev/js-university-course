const list = document.querySelector("#books");
const button = list.querySelector("button");
const log = (event) => console.log("list", event.eventPhase);

list.addEventListener("click", log, { capture: true });
list.removeEventListener("click", log);
button.click(); // list 1

list.removeEventListener("click", log, { capture: true });
button.click();
