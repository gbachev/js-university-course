// The imagined release 1.1.0 of the lecture, not the Reading List in reading-list/.
// Plays the part of main.js: report.js is the first import, so its listeners are
// ready before anything else runs.
import { breadcrumb } from './01-report.js';

// Vite's define puts the version from package.json here in the build. Without Vite,
// we set the same name by hand.
globalThis.__APP_VERSION__ = '1.1.0';

// A fake endpoint: instead of sending, sendBeacon() shows the report on the page.
const reports = document.querySelector('#reports');
navigator.sendBeacon = (url, body) => {
    console.log(`report to ${url}`, JSON.parse(body));
    reports.textContent += `${JSON.stringify(JSON.parse(body), null, 4)}\n\n`;
    return true;
};

breadcrumb('start, 2 saved books');

document.querySelector('#search').addEventListener('click', () => {
    breadcrumb('search');
});

document.querySelector('#break').addEventListener('click', () => {
    breadcrumb('show date');
    // A book saved by version 1.0.0 has no addedAt.
    new Date(undefined).toISOString(); // RangeError: Invalid time value
});

document.querySelector('#reject').addEventListener('click', () => {
    breadcrumb('load covers');
    Promise.reject(new Error('Covers service is down'));
});
