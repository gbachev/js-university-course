const list = document.querySelector("#books");

list.addEventListener("click", (event) => {
    console.log(event.type); // click
    console.log(event.target.textContent); // Emma
    console.log(event.currentTarget.id); // books
    console.log(event.timeStamp); // 1532.6 (differs on every run)
});

list.lastElementChild.click();
