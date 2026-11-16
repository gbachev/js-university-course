// An HTMLCollection is live, a NodeList from querySelectorAll() is a snapshot.
const live = document.getElementsByClassName('product');
const snapshot = document.querySelectorAll('.product');
console.log(live.length); // 3
console.log(snapshot.length); // 3

const item = document.createElement('li');
item.className = 'product';
document.getElementById('products').append(item);

console.log(live.length); // 4
console.log(snapshot.length); // 3
console.log(document.querySelectorAll('.product').length); // 4
