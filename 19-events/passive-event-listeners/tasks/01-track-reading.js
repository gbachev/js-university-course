// Task 1: Track reading, smoothly
// Lecture: Passive Event Listeners
//
// Our reader shows a status line: as soon as the reader is touched or scrolled with the
// wheel, it says "Reading (touchstart)" or "Reading (wheel)". trackReading(reader,
// status) adds a touchstart and a wheel listener that only update the status: they
// never call preventDefault(). Yet they do not say so, and the scroll waits for them.
// Fix trackReading(), so both listeners promise the browser they never block the
// scroll.
//
// Examples:
//   a wheel turn on the reader   the status says "Reading (wheel)", the reader scrolls
//
// Open the page: npm run serve, then 19-events/passive-event-listeners/tasks/01-track-reading.html

export function trackReading(reader, status) {
    function showReading(event) {
        status.textContent = `Reading (${event.type})`;
    }

    reader.addEventListener('touchstart', showReading);
    reader.addEventListener('wheel', showReading);
}
