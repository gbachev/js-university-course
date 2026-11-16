// Better: the arrow calls the method on its object.
class Cart {
    items = [];

    add(product) {
        this.items.push(product);
    }
}

const cart = new Cart();
const products = ['book', 'pen'];

products.forEach((product) => cart.add(product));
console.log(cart.items); // [ 'book', 'pen' ]
