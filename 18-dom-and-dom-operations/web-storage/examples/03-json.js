// JSON.stringify() on the way in, JSON.parse() on the way out.
const user = { name: 'Jane Doe', newsletter: false };

localStorage.setItem('user', JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem('user'));
console.log(saved.name); // Jane Doe
console.log(saved.newsletter === false); // true
