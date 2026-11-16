// let can get a new value, const cannot.
const shopName = 'Book Corner';
let booksInCart = 1;

booksInCart = 2;
console.log(shopName + ' has ' + booksInCart + ' books for you');
// Book Corner has 2 books for you

try {
    shopName = 'Comic Corner';
} catch (error) {
    console.log(error.name + ': ' + error.message);
    // TypeError: Assignment to constant variable.
}
