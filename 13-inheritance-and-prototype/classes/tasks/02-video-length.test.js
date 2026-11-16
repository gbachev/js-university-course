import { test } from 'node:test';
import assert from 'node:assert/strict';

// Our code from this folder, or the solution with npm run test:solutions.
const { Video } = await import(
    process.env.SOLUTIONS ? '../solutions/02-video-length.js' : './02-video-length.js'
);

test('the length is stored in seconds', () => {
    assert.equal(new Video('Intro', 2.5).seconds, 150);
});

test('the minutes are read from the seconds', () => {
    const intro = new Video('Intro', 2.5);
    intro.seconds = 90;
    assert.equal(intro.minutes, 1.5);
});

test('setting the minutes updates the seconds', () => {
    const intro = new Video('Intro', 2.5);
    intro.minutes = 4;
    assert.equal(intro.seconds, 240);
});

test('the seconds are rounded to whole seconds', () => {
    assert.equal(new Video('Recap', 1.333).seconds, 80);
});

test('a video owns only its title and seconds', () => {
    const intro = new Video('Intro', 2.5);
    assert.deepEqual(Object.keys(intro), ['title', 'seconds']);
    assert.equal(Object.hasOwn(Video.prototype, 'minutes'), true);
});
