export function trackReading(reader, status) {
    function showReading(event) {
        status.textContent = `Reading (${event.type})`;
    }

    // The listeners only read, so the scroll does not have to wait for them.
    reader.addEventListener('touchstart', showReading, { passive: true });
    reader.addEventListener('wheel', showReading, { passive: true });
}
