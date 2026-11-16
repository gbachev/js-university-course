export let itemsInStock = 1;

export function sellOne() {
    if (itemsInStock > 0) {
        itemsInStock -= 1;
    }
}
