export function Product(name, price) {
    this.name = name;
    this.price = price;
}

export function toProduct(item) {
    if (item instanceof Product) {
        return item;
    }

    return new Product(item.name, item.price);
}
