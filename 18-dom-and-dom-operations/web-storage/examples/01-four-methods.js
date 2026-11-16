// setItem(), getItem(), removeItem() and clear(). A missing key gives null.
localStorage.clear(); // start from an empty store: other examples save keys too

localStorage.setItem('theme', 'dark');
localStorage.setItem('language', 'en');

console.log(localStorage.getItem('theme')); // dark
console.log(localStorage.getItem('fontSize')); // null
console.log(localStorage.length); // 2

localStorage.removeItem('theme');
console.log(localStorage.getItem('theme')); // null

localStorage.clear();
console.log(localStorage.length); // 0
