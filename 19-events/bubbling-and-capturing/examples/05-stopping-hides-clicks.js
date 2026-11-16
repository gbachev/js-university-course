const menu = document.querySelector("#menu");
let clicks = 0;

document.addEventListener("click", (event) => {
    clicks++;
    if (!event.target.closest("#menu")) {
        menu.classList.remove("open");
    }
});

const remove = document.querySelector(".book button");
remove.addEventListener("click", (event) => {
    event.stopPropagation();
    remove.closest(".book").remove();
});

remove.click();
console.log(menu.classList.contains("open")); // true
console.log(clicks); // 0

document.querySelector(".title").click();
console.log(menu.classList.contains("open")); // false
console.log(clicks); // 1
