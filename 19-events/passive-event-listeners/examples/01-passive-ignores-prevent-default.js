const reader = document.querySelector("#reader");

reader.addEventListener("wheel", (event) => {
    event.preventDefault();
    console.log(event.defaultPrevented); // false
}, { passive: true });

const wheel = new WheelEvent("wheel", { cancelable: true });
reader.dispatchEvent(wheel);
// Chrome also warns: Unable to preventDefault inside passive event listener invocation.
