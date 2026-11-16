// Assigning an object copies the reference: both variables point to one object.
let user1 = { name: 'John Doe' };
let user2 = user1;

user2.name = 'Jane Doe';
console.log(user1.name); // Jane Doe
