// An exported let is a live binding: importers always read the current value.
export let itemsInStock = 3;

export function sellOne() {
    if (itemsInStock === 0) {
        return false;
    }
    itemsInStock -= 1;
    return true;
}

export function restock(amount) {
    itemsInStock += amount;
}
