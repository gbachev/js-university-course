export function watchUnread(inbox, counter) {
    function update() {
        counter.textContent = inbox.querySelectorAll('li[data-status="new"]').length;
    }

    const observer = new MutationObserver(update);
    observer.observe(inbox, {
        childList: true,
        subtree: true,
        attributeFilter: ['data-status'],
    });
    update();
    return observer;
}
