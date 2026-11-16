export class Cart {
    items = [];

    add(product) {
        this.items.push(product);
    }

    addAll(products) {
        products.forEach((product) => this.add(product));
    }
}
