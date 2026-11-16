const reader = document.querySelector("#reader");

function block(event) {
    event.preventDefault();
    console.log(event.defaultPrevented);
}

window.addEventListener("wheel", block);
window.dispatchEvent(new WheelEvent("wheel", { cancelable: true }));
// false (true in Safari)

reader.addEventListener("wheel", block);
reader.dispatchEvent(new WheelEvent("wheel", { cancelable: true }));
// true

document.addEventListener("wheel", block, { passive: false });
document.dispatchEvent(new WheelEvent("wheel", { cancelable: true }));
// true
