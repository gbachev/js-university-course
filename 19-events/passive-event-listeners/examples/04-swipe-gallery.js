const gallery = document.querySelector("#gallery");
let startX = 0;

gallery.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
}, { passive: true });

gallery.addEventListener("touchmove", (event) => {
    event.preventDefault();
    const moved = event.touches[0].clientX - startX;
    gallery.style.transform = `translateX(${moved}px)`;
}, { passive: false });

gallery.addEventListener("touchend", () => {
    console.log(gallery.style.transform);
});
// translateX(-120px)
// (for a 120px swipe to the left)
