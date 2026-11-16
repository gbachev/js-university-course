function debounce(fn, wait) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, wait);
    };
}

const search = debounce((query) => {
    console.log(`Searching for ${query}`);
}, 300);

search("j");
search("ja");
setTimeout(() => search("jav"), 100);
setTimeout(() => search("java"), 200);
// Searching for java
