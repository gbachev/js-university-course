import { check, equal, source } from '/lib/browser-check.js';

const { setUpZoom } = await import(source('02-map-zoom.js'));

const map = document.querySelector('#map');
const zoom = document.querySelector('#zoom');
setUpZoom(zoom);

function turnWheel(deltaY, ctrlKey) {
    const wheel = new WheelEvent('wheel', { deltaY, ctrlKey, cancelable: true, bubbles: true });
    map.dispatchEvent(wheel);
    return wheel;
}

check('Ctrl + wheel up zooms in', () => {
    turnWheel(-100, true);
    equal(zoom.textContent, '2');
});

check('Ctrl + wheel is cancelled, so the browser does not zoom the page', () => {
    equal(turnWheel(-100, true).defaultPrevented, true);
    equal(zoom.textContent, '3');
});

check('the zoom stops at 5', () => {
    turnWheel(-100, true);
    turnWheel(-100, true);
    turnWheel(-100, true);
    equal(zoom.textContent, '5');
});

check('Ctrl + wheel down zooms out, down to 1', () => {
    for (let i = 0; i < 6; i++) {
        turnWheel(100, true);
    }
    equal(zoom.textContent, '1');
});

check('a wheel turn without Ctrl scrolls: no zoom, not cancelled', () => {
    const wheel = turnWheel(-100, false);
    equal(zoom.textContent, '1');
    equal(wheel.defaultPrevented, false);
});
