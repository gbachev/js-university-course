// cancel() stops the pending run, for example when the search panel closes.
function debounce(fn, delay) {
    let timerId;
    const debounced = (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delay);
    };
    debounced.cancel = () => clearTimeout(timerId);
    return debounced;
}

const search = debounce((query) => {
    console.log(`Searching for ${query}`);
}, 300);

search('dune');
search.cancel(); // the search panel closed
console.log('Panel closed');
// Panel closed
