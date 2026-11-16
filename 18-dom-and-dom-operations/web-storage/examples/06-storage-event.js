// The storage event fires in every other tab of the same origin, not in the tab that wrote.
// addEventListener() comes in the Events section: for now, this line runs our function on
// every change.
window.addEventListener('storage', (event) => {
    console.log(`${event.key} changed to ${event.newValue}`);
});

// another tab runs: localStorage.setItem('theme', 'dark')
// this tab prints: theme changed to dark
