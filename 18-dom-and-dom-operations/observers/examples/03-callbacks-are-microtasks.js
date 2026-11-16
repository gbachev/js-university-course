// The observer callback is a microtask: it runs after the script, before the timer.
const inbox = document.querySelector('#inbox');
const observer = new MutationObserver((records) => {
    console.log(`Observer: ${records.length} records`);
});
observer.observe(inbox, { childList: true });

setTimeout(() => console.log('Timer'), 0);
for (const text of ['Sale ends today', 'New follower']) {
    const item = document.createElement('li');
    item.textContent = text;
    inbox.append(item);
}
Promise.resolve().then(() => console.log('Then'));
console.log('Script done');

// Script done
// Observer: 2 records
// Then
// Timer
