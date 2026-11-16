document.addEventListener("keydown", (event) => {
    console.log(event.key, event.code, event.shiftKey);
});
// Clicking the page, then pressing Shift + A:
// Shift ShiftLeft true
// A KeyA true
