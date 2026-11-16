export function createCartCounter() {
    let items = 0;

    return {
        add() {
            items++;
        },
        remove() {
            if (items > 0) {
                items--;
            }
        },
        count() {
            return items;
        },
    };
}
