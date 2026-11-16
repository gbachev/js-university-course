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
    // bind fixes this to the counter, however the handler is called later.
    return counter.click.bind(counter);
}
