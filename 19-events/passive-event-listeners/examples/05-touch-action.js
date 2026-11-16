// The CSS in the page sets touch-action: pan-y on the gallery, so the browser scrolls
// vertically by itself and leaves sideways moves to us. No preventDefault() needed,
// so every listener stays passive.
const gallery = document.querySelector("#gallery");
let startX = 0;

gallery.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
}, { passive: true });

gallery.addEventListener("touchmove", (event) => {
    const moved = event.touches[0].clientX - startX;
    gallery.style.transform = `translateX(${moved}px)`;
}, { passive: true });

gallery.addEventListener("touchend", () => {
    console.log(gallery.style.transform);
});
