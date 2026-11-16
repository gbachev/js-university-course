// Three ways to keep this at the call site.
class Cart {
    items = [];

    add(product) {
        this.items.push(product);
    }
}

const cart = new Cart();
const products = ['book', 'pen'];

products.forEach((product) => cart.add(product));
products.forEach(cart.add.bind(cart));
products.forEach(cart.add, cart);

console.log(cart.items.length); // 6
