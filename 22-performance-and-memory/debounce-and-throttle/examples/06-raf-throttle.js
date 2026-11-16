// requestAnimationFrame as a throttle: 100 calls before the next frame, one update.
function rafThrottle(fn) {
    let frameId = null;
    let lastArgs;
    return (...args) => {
        lastArgs = args;
        if (frameId === null) {
            frameId = requestAnimationFrame(() => {
                frameId = null;
                fn(...lastArgs);
            });
        }
    };
}

const bar = document.createElement('div');
document.body.append(bar);
let renders = 0;

const updateBar = rafThrottle((percent) => {
    renders++;
    bar.style.transform = `scaleX(${percent / 100})`;
});

// a fast scroll: 100 calls before the next frame
for (let percent = 1; percent <= 100; percent++) {
    updateBar(percent);
}

requestAnimationFrame(() => {
    console.log(renders); // 1
    console.log(bar.style.transform); // scaleX(1)
});
