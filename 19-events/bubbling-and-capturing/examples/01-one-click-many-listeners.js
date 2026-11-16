const button = document.querySelector(".book button");
const elements = [
    button,
    button.closest(".book"),
    document.querySelector("#books"),
    document.body
];

for (const element of elements) {
    element.addEventListener("click", (event) => {
        const current = event.currentTarget.nodeName;
        console.log(current, event.target.nodeName);
    });
}

button.click();
// BUTTON BUTTON
// LI BUTTON
// UL BUTTON
// BODY BUTTON

document.querySelector(".title").click();
// LI SPAN
// UL SPAN
// BODY SPAN
