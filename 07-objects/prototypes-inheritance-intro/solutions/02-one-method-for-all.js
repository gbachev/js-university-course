export function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.describe = function () {
    return this.name + ' - ' + this.price + ' EUR';
};
