// requestAnimationFrame() runs our callback right before the browser renders: one update
// per frame. A reading progress bar grows to 75% in half a second.
const bar = document.createElement('div');
bar.style.height = '8px';
bar.style.background = 'seagreen';
bar.style.transformOrigin = 'left';
document.body.append(bar);

const duration = 500;
let start;

function grow(time) {
    start ??= time;
    const progress = Math.min((time - start) / duration, 1);
    bar.style.transform = `scaleX(${progress * 0.75})`;

    if (progress < 1) {
        requestAnimationFrame(grow);
    } else {
        console.log(bar.style.transform);
    }
}

requestAnimationFrame(grow);
// scaleX(0.75)
