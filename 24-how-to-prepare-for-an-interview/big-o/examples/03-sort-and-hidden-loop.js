const titles = ['Ulysses', 'Dune', 'Emma', 'Beloved'];
titles.sort(); // O(n log n)
console.log(titles); // ['Beloved', 'Dune', 'Emma', 'Ulysses']

const wishlist = ['Dune', 'Emma', 'Ulysses'];
const inStock = ['Emma', 'Beloved', 'Dune'];

// O(n * m): includes() is a loop inside filter()'s loop
const available = wishlist.filter((title) => inStock.includes(title));
console.log(available); // ['Dune', 'Emma']
