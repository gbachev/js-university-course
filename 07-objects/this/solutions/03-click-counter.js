export function createCounter() {
    return {
        clicks: 0,
        click() {
            this.clicks++;
            return this.clicks;
        },
    };
}

export function getClickHandler(counter) {
    // The arrow function calls click() on the counter, however the handler is called.
    return () => counter.click();
}
