// subtree reaches the li elements, attributeFilter keeps only data-status.
const inbox = document.querySelector('#inbox');

const observer = new MutationObserver((records) => {
    for (const { type, target, oldValue } of records) {
        console.log(type, target.nodeName, oldValue);
    }
});
observer.observe(inbox, {
    childList: true,
    subtree: true,
    attributeFilter: ['data-status'],
    attributeOldValue: true,
});

const first = inbox.firstElementChild;
first.dataset.status = 'seen';
first.title = 'Today';
first.textContent = 'Your order has arrived';
// attributes LI new
// childList LI null
