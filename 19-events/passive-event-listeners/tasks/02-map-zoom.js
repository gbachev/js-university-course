// Task 2: A zoom that zooms
// Lecture: Passive Event Listeners
//
// Our page is one big map of the bookshops in town. setUpZoom(zoom) listens for wheel
// on document: with Ctrl held, a turn up (deltaY below 0) zooms in by 1 and a turn
// down zooms out by 1, from 1 to 5, and the listener calls preventDefault() so the
// browser does not zoom the whole page as well. A wheel turn without Ctrl is a normal
// scroll: no zoom, no preventDefault(). The zoom level changes, but the browser still
// zooms the page: its preventDefault() is ignored. Fix it.
//
// Open this page in Chrome or Firefox. Safari does not make wheel listeners on
// document passive, so the starter already passes there.
//
// Examples:
//   Ctrl + wheel up      zoom 2, the event is canceled
//   wheel up, no Ctrl    zoom stays, the event is not canceled
//
// Open the page: npm run serve, then 19-events/passive-event-listeners/tasks/02-map-zoom.html

export function setUpZoom(zoom) {
    let level = 1;

    document.addEventListener('wheel', (event) => {
        if (!event.ctrlKey) {
            return;
        }
        event.preventDefault();
        level = event.deltaY < 0 ? Math.min(level + 1, 5) : Math.max(level - 1, 1);
        zoom.textContent = String(level);
    });
}
