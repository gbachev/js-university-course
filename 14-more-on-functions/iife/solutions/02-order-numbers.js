export const orderNumbers = (function () {
    let count = 0;

    function next() {
        count++;
        return `ORD-${count}`;
    }

    function reset() {
        count = 0;
    }

    return { next, reset };
})();
