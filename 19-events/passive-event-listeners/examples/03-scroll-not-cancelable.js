const reader = document.querySelector("#reader");

reader.addEventListener("scroll", (event) => {
    console.log(event.cancelable); // false
    console.log(reader.scrollTop); // 300
});

reader.scrollTop = 300;
