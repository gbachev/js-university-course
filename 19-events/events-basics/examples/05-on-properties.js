const button = document.querySelector("#add");

button.onclick = () => console.log("first");
button.onclick = () => console.log("second");
button.addEventListener("click", () => console.log("third"));

button.click();
// second
// third
