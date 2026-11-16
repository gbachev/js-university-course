// One function that stops everything the panel started: listener, timer and observer.
function openPanel(panel) {
    const controller = new AbortController();
    const timerId = setInterval(() => {
        console.log('Prices refreshed');
    }, 1000);
    const observer = new IntersectionObserver(() => {
        console.log('Panel seen');
    });

    window.addEventListener('resize', () => {
        console.log('Resized');
    }, { signal: controller.signal });
    observer.observe(panel);
    document.body.append(panel);

    return () => {
        controller.abort();
        clearInterval(timerId);
        observer.disconnect();
        panel.remove();
    };
}

const closePanel = openPanel(document.createElement('div'));
window.dispatchEvent(new Event('resize')); // Resized

closePanel();
window.dispatchEvent(new Event('resize'));
// nothing more: listener, timer and observer are gone
