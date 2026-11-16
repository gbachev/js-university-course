const list = document.querySelector("#books");
const button = list.querySelector("button");

function log(event) {
    console.log(event.currentTarget.nodeName, event.eventPhase);
}

document.addEventListener("click", log, { capture: true });
list.addEventListener("click", log, true);
list.addEventListener("click", log);
button.addEventListener("click", log);
document.addEventListener("click", log);

button.click();
// #document 1
// UL 1
// BUTTON 2
// UL 3
// #document 3
