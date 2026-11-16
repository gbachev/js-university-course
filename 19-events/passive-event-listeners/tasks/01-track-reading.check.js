import { check, deepEqual, equal, source } from '/lib/browser-check.js';

const { trackReading } = await import(source('01-track-reading.js'));

const reader = document.querySelector('#reader');
const status = document.querySelector('#status');

// We note the type and the options of every listener trackReading() adds to the reader.
const added = [];
const addEventListener = reader.addEventListener;
reader.addEventListener = function (type, listener, options) {
    added.push({ type, passive: options?.passive === true });
    return addEventListener.call(this, type, listener, options);
};
trackReading(reader, status);

check('it adds a touchstart and a wheel listener', () => {
    deepEqual(added.map((listener) => listener.type).sort(), ['touchstart', 'wheel']);
});

check('the touchstart listener is passive', () => {
    equal(added.find((listener) => listener.type === 'touchstart')?.passive, true);
});

check('the wheel listener is passive', () => {
    equal(added.find((listener) => listener.type === 'wheel')?.passive, true);
});

check('a wheel turn updates the status and is not canceled', () => {
    const wheel = new WheelEvent('wheel', { cancelable: true, deltaY: 100 });
    reader.dispatchEvent(wheel);
    equal(status.textContent, 'Reading (wheel)');
    equal(wheel.defaultPrevented, false);
});
