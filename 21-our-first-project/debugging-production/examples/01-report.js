// src/report.js from the lecture, unchanged. 01-report-page.js loads it.
const ENDPOINT = 'https://errors.example.com/reading-list';
const breadcrumbs = [];

// The last few things the user did, without their data.
export function breadcrumb(action) {
    breadcrumbs.push(action);
    if (breadcrumbs.length > 5) {
        breadcrumbs.shift();
    }
}

function report(error) {
    const body = JSON.stringify({
        message: String(error),
        stack: error?.stack,
        url: location.origin + location.pathname,
        version: __APP_VERSION__,
        browser: navigator.userAgent,
        breadcrumbs,
    });
    navigator.sendBeacon(ENDPOINT, body);
}

window.addEventListener('error', (event) => {
    report(event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    report(event.reason);
});
