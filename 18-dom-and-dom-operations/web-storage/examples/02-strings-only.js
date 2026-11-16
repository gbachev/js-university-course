// Whatever we save comes back as a string.
localStorage.setItem('visits', 3);
const visits = localStorage.getItem('visits');

console.log(typeof visits); // string
console.log(visits + 1); // 31

localStorage.setItem('user', { name: 'Jane Doe' });
console.log(localStorage.getItem('user')); // [object Object]
