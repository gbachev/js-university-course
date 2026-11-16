export function setUpZoom(zoom) {
    let level = 1;

    // A wheel listener on document is passive by default, so we ask for a blocking one.
    document.addEventListener(
        'wheel',
        (event) => {
            if (!event.ctrlKey) {
                return;
            }
            event.preventDefault();
            level = event.deltaY < 0 ? Math.min(level + 1, 5) : Math.max(level - 1, 1);
            zoom.textContent = String(level);
        },
        { passive: false }
    );
}
