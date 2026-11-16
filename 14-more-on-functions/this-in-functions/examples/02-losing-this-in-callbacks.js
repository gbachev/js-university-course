// A method passed as a callback leaves its object behind.
class Cart {
    items = [];

    add(product) {
        this.items.push(product);
    }
}

const cart = new Cart();

// forEach calls add with this set to undefined, so the file catches the error.
try {
    ['book', 'pen'].forEach(cart.add);
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Cannot read properties of undefined (reading 'items')
}
