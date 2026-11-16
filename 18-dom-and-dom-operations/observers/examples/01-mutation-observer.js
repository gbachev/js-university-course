// MutationObserver reports changes made by code we do not control.
const inbox = document.querySelector('#inbox');

const observer = new MutationObserver((records) => {
    for (const record of records) {
        const { type, addedNodes, removedNodes } = record;
        console.log(type, addedNodes.length, removedNodes.length);
    }
});
observer.observe(inbox, { childList: true });

// what a chat widget we do not control might do
const message = document.createElement('li');
message.textContent = 'John Doe sent you a message';
inbox.append(message);
inbox.firstElementChild.remove();

console.log('Script done');
// Script done
// childList 1 0
// childList 0 1
