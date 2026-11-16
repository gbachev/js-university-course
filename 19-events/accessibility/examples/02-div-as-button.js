const clear = document.querySelector("#clear");

clear.setAttribute("role", "button");
clear.tabIndex = 0;
clear.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        clear.click();
    }
});
clear.addEventListener("click", () => console.log("Cleared"));
// Tab to "Clear list", then Enter:
// Cleared
