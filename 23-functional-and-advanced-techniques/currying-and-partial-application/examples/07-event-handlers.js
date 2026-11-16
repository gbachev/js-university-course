// The factory takes the data now and returns the handler the browser calls later.
const cart = new Set(['dune', 'emma']);

const removeBook = id => () => {
    cart.delete(id);
    console.log(`Removed ${id}, ${cart.size} left`);
};

for (const id of cart) {
    const button = document.createElement('button');
    button.textContent = `Remove ${id}`;
    button.addEventListener('click', removeBook(id));
    document.body.append(button);
}
// Removed dune, 1 left
