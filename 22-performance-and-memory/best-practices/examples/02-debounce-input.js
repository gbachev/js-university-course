// One search per key against one search once the typing stops.

// debounce() from Debounce and Throttle
function debounce(fn, delay) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delay);
    };
}

const input = document.createElement('input');
document.body.append(input);

// considered bad practice: one search per key
input.addEventListener('input', () => {
    console.log(`Every key: ${input.value}`);
});

// better: one search once the typing stops
const search = debounce((query) => {
    console.log(`Debounced: ${query}`);
}, 300);
input.addEventListener('input', () => search(input.value));

for (const text of ['E', 'Em', 'Emm', 'Emma']) {
    input.value = text;
    input.dispatchEvent(new Event('input'));
}
// Every key: E
// Every key: Em
// Every key: Emm
// Every key: Emma
// Debounced: Emma
