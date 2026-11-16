// An arrow function in a class field fixes this to each instance.
class Cart {
    items = [];

    add = (product) => {
        this.items.push(product);
    };
}

const cart = new Cart();
['book', 'pen'].forEach(cart.add);
console.log(cart.items); // [ 'book', 'pen' ]
