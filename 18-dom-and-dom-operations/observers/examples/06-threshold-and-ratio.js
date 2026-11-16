// The callback runs when the ratio crosses one of our thresholds. In the lecture we run
// each scroll line on its own. Here we wait two frames between them, so the browser
// renders and checks the intersections in between. (A module script, for the await.)
const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));
const twoFrames = async () => {
    await nextFrame();
    await nextFrame();
};

window.scrollTo(0, 0); // start at the top: the browser keeps our scroll position on reload
const last = document.querySelector('#inbox li:last-child');

const observer = new IntersectionObserver(
    ([entry]) => {
        const ratio = entry.intersectionRatio.toFixed(2);
        console.log(entry.isIntersecting, ratio);
    },
    { threshold: [0, 0.5, 1] },
);
observer.observe(last); // false 0.00
await twoFrames();

const pageTop = last.getBoundingClientRect().top + window.scrollY;
window.scrollTo(0, pageTop - window.innerHeight + 100); // true 0.50
await twoFrames();
window.scrollBy(0, 100); // true 1.00
await twoFrames();
window.scrollBy(0, window.innerHeight); // false 0.00
